# Solution for a network forensics task. The VNC client and server exchanged keystrokes in the form of packets.
# The goal was to reconstruct the text that the user entered on the server. That was the flag.

# Frame 1072: 52 bytes on wire (416 bits), 52 bytes captured (416 bits) on interface \Device\NPF_Loopback, id 0
# Null/Loopback
# Internet Protocol Version 4, Src: 127.0.0.1, Dst: 127.0.0.1
# Transmission Control Protocol, Src Port: 55072, Dst Port: 5901, Seq: 1289, Ack: 339539, Len: 8
# Virtual Network Computing
#     Client Message Type: Key Event (4)
#         Key down: Yes
#         Padding
#         Key: t (0x00000074)

# No.     Time           Source                Destination           Protocol Length Info
#    1118 7.345999       127.0.0.1             127.0.0.1             VNC      52     Client key event

# Initially, it was assumed that I would try to dump everything and then parse and assemble it as I did with the NFS task based on my previous experience.
# But this turned out to be quite problematic, as it was resource-intensive to properly trim everything from the traffic dump except for the desired keystroke.
# Here is an attempt to create a working script that reconstructs the flag (unfinished program).
# In the end, I solved the task by setting the Key Press as a filter column in the WireShark table and manually copying everything to a notepad.
# It turned out to be easier this way because to complicate the task, the user pressed and released special keys such as Shift, Backspace, arrows, etc.
# He also periodically erased the written text and typed it again.
# Handling such "exceptions" is quite difficult and problematic, and it requires a lot of time for debugging, so I eventually decided to do everything manually.

key_code_to_char = {
    '0x00000020': ' ',  # Space
    '0x00000061': 'a',
    '0x00000062': 'b',
    '0x00000063': 'c',
    # ... на этом моменте мне стало лень печатать дальше символы
    '0x0000007d': '}',
    '0x0000007b': '{',
    '0x00000069': 'i',
    '0x00000074': 't',
    '0x0000006d': 'm',
    '0x0000006f': 'o',
    # ... уже не хочется ...
}

def parse_key_events(file_path):
    key_events = []
    with open(file_path, 'r') as file:
        for line in file:
            if 'Client key event' in line:
                key_down = 'down' in line.lower()
                key_code = line.split('(')[-1].split(')')[0].strip()
                key_events.append({'key_code': key_code, 'key_down': key_down})
    return key_events

key_events = parse_key_events('packets.txt')

reconstructed_text = ''
shift_pressed = False
cursor_position = 0

for event in key_events:
    key_code = event['key_code']
    key_down = event['key_down']

    if key_code == '0x0000ffe1':  # Shift
        shift_pressed = key_down

    elif key_down:
        if key_code in key_code_to_char:
            char = key_code_to_char[key_code]

            if shift_pressed:
                char = char.upper()

            reconstructed_text = reconstructed_text[:cursor_position] + char + reconstructed_text[cursor_position:]
            cursor_position += 1

        elif key_code == '0x0000ff08':  # Backspace
            if cursor_position > 0:
                reconstructed_text = reconstructed_text[:cursor_position - 1] + reconstructed_text[cursor_position:]
                cursor_position -= 1

        elif key_code == '0x0000ff51':  # <--
            cursor_position = max(0, cursor_position - 1)

        elif key_code == '0x0000ff53':  # -->
            cursor_position = min(len(reconstructed_text), cursor_position + 1)


print(reconstructed_text)



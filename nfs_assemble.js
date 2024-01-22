// The purpose of this script is to assemble the NTFS image from the chunks that were found segmented in the traffic dump provided in the CTF task description.
// The dump was provided as a pcap file, which was analyzed using Wireshark. The chunks were extracted from the pcap file with filtering out the TCP headers.
// The chunks were then saved to files named 0, 1, 2, etc. The chunks were then reassembled using this script.
// The traffic that was written contained both the data and the desired offsets for the chunks, so the offsets were manually extracted from the traffic dump.
// Afterwards we needed to form a whole image by writing the data in the traffict dump to the correct offsets in the image file.
// The final image was then mounted using the following command: sudo mount -o loop,ro ntfs.img /mnt/ntfs

const fs = require('fs');

// Read chunk data from files
const data0 = fs.readFileSync('0');
const data1 = fs.readFileSync('1');
const data2 = fs.readFileSync('2');
const data3 = fs.readFileSync('3');
const data4 = fs.readFileSync('4');
const data5 = fs.readFileSync('5');
const data6 = fs.readFileSync('6');
const data7 = fs.readFileSync('7');
const data8 = fs.readFileSync('8');
const data9 = fs.readFileSync('9');
const data10 = fs.readFileSync('10');
const data11 = fs.readFileSync('11');
const data12 = fs.readFileSync('12');
const data13 = fs.readFileSync('13');
const data14 = fs.readFileSync('14');
const data15 = fs.readFileSync('15');
const data16 = fs.readFileSync('16');
const data17 = fs.readFileSync('17');
const data18 = fs.readFileSync('18');
const data19 = fs.readFileSync('19');
const data20 = fs.readFileSync('20');
const data21 = fs.readFileSync('21');
const data22 = fs.readFileSync('22');

// Sample chunk data and offsets
const chunks = [
    { data: data0, offset: 0 /* Offset for chunk 0 */ },
    { data: data1, offset: 0/* Offset for chunk 1 */ },
    { data: data2, offset: 2097152/* Offset for chunk 2 */ },
    { data: data3, offset: 4194304/* Offset for chunk 3 */ },
    { data: data4, offset: 17179803648/* Offset for chunk 4 */ },
    { data: data5, offset: 0/* Offset for chunk 5 */ },
    { data: data6, offset: 17179734016/* Offset for chunk 6 */ },
    { data: data7, offset: 17179664384/* Offset for chunk 7 */ },
    { data: data8, offset: 17179566080/* Offset for chunk 8 */ },
    { data: data9, offset: 17179521024/* Offset for chunk 9 */ },
    { data: data10, offset: 17179492352/* Offset for chunk 10 */ },
    { data: data11, offset: 17179402240/* Offset for chunk 11 */ },
    { data: data12, offset: 17179369472/* Offset for chunk 12 */ },
    { data: data13, offset: 17179361280/* Offset for chunk 13 */ },
    { data: data14, offset: 17178288128/* Offset for chunk 14 */ },
    { data: data15, offset: 17179344896/* Offset for chunk 15 */ },
    { data: data16, offset: 8589930496/* Offset for chunk 16 */ },
    { data: data17, offset: 2148302848/* Offset for chunk 17 */ },
    { data: data18, offset: 2147508224/* Offset for chunk 18 */ },
    { data: data19, offset: 2332999680/* Offset for chunk 19 */ },
    { data: data20, offset: 2147504128/* Offset for chunk 20 */ },
    { data: data21, offset: 2332983296/* Offset for chunk 21 */ },
    { data: data22, offset: 2450427904/* Offset for chunk 22 */ }
];

const targetFile = 'ntfs.img';

chunks.forEach(chunk => {
    fs.open(targetFile, 'r+', (err, fd) => {
        if (err) {
            console.error(`Error opening file: ${err}`);
        } else {
            fs.write(fd, chunk.data, 0, chunk.data.length, chunk.offset, (err) => {
                if (err) {
                    console.error(`Error writing to file: ${err}`);
                }
                fs.close(fd, (err) => {
                    if (err) {
                        console.error(`Error closing file: ${err}`);
                    }
                });
            });
        }
    });
});

# QR Payment

## Resources

### What’s in a QR code

⚠️ Read this section to understand privacy implications of using PromptPay QR code ⚠️

- The PromptPay QR code is based on [EMV QRCPS Merchant Presented Mode](https://www.emvco.com/emv-technologies/qrcodes/) specification.
- The QR code contains the PromptPay ID. This means anyone who sees the QR code can find out your PromptPay ID (Phone number, National ID number, e-Wallet ID). Please treat the QR code like your personal information.
- The QR code can optionally contain the transfer amount. Mobile banking apps use this number to pre-fill the amount for convenience.

### EMVCo QR Code Specification for Payment Systems

- [Merchant-Presented Mode (PDF)](https://www.emvco.com/wp-content/uploads/documents/EMVCo-Merchant-Presented-QR-Specification-v1_0.pdf)
- [Consumer Presented Mode (PDF)](https://www.emvco.com/wp-content/uploads/documents/EMVCo-Consumer-Presented-QR-Specification-v1.pdf)

### Dev Resource

- [promptpay2.me](https://promptpay-qr.firebaseapp.com/) | [github](https://github.com/dtinth/promptpay-qr)
- [PHP Library to generate QR Code payload for PromptPay](https://github.com/kittinan/php-promptpay-qr)
- [Android PromptPay QR-Code Generator](https://github.com/diewland/promptpay-qr-plus)
- [https://qr-generator.digio.co.th](https://qr-generator.digio.co.th/)

## FAQ

- tag 29, 30 คืออะไร

## Updates

### 2017-08-30

- [แบงก์ชาติเปิดตัว ‘QR Code มาตรฐาน’ จุดเปลี่ยนประเทศไทยสู่สังคมไร้เงินสด?](https://thestandard.co/standardqrcode/)
- [ออมสินเปิดตัว GSB PAY แอปพลิเคชั่นเดียว ที่รวมบัตรเดบิต/บัตรเครดิตไว้ทุกธนาคาร รองรับการประกาศใช้ คิวอาร์โค้ด มาตรฐานประเทศไทยได้ทันทีเป็นรายแรก](https://goo.gl/Ru8Bma)

### 2017-08-31

- [มีอะไรอยู่ใน PromptPay QR แกะสเปค QR ที่จะใช้จ่ายผ่าน mobile banking ได้ทุกธนาคารในอนาคต](https://www.blognone.com/node/95133)

### 2017-11-13

- [ธปท.อนุญาต 5 ธนาคาร ให้บริการ QR Code เป็นการทั่วไปแล้ว](https://goo.gl/L8v3nr)

- [K Plus Shop เชื่อมระบบ PromptPay แล้ว เป็นเลข PromptPay แรกที่ไม่ใช่เบอร์โทรและเลขบัตรประชาชน](https://www.blognone.com/node/97186)

### 2017-11-14

- [เคทีซี เปิดรับชำระ QR Code Payment ด้วยบัตรเครดิตรายแรกในไทย เริ่ม 16 พ.ย.นี้](https://goo.gl/drtknb)
- [กสิกรไทยลุย K PLUS SHOP แอปร้านค้ารับชำระด้วยคิวอาร์โค้ดทั่วประเทศ 1 ล้านร้านค้าในปี 61 อัดแคมเปญพร้อมเดินสายทั่วประเทศ](https://goo.gl/rn8bxx)
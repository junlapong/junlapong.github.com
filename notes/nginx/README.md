# NGINX

## macOS

### Installation

ติดตั้ง nginx ด้วย brew ดังนี้

	brew install nginx

สามารถตรวจสอบว่าเคยติดตั้ง nginx อยู่แล้วหรือไม่ ดังนี้

	brew info nginx

เมื่อติดตั้ง nginx เรียบร้อยแล้ว โดย default จะมี directory กำหนดไว้ดังนี้

1. Docroot เป็น directory ใช้เก็บเอกสารอยู่ที่

	```
	/usr/local/var/www
	```

2. Nginx เป็น directory ใช้เก็บ configuration ไฟล์ต่างๆ

	```
	/usr/local/etc/nginx
	```

โดยไฟล์ config `/usr/local/etc/nginx/nginx.conf` จะกำหนด default port ไว้ที่ 8080 เพื่อให้ nginx สามารถรันได้ โดยไม่ต้องใช้คำสั่ง `sudo`

### Start nginx

1. run nginx แบบปกติ ดังนี้

	```
	nginx
	```

2. run nginx แบบ background service (start ให้เองเมื่อ restart และ logon) ให้รันดังนี้

	```
	brew services start nginx
	```


### Configuration

โดย default config ไฟล์คือ `/usr/local/etc/nginx/nginx.conf` เราสามารถแก้ไขและบันทึกไฟล์ และสามารถ test ความถูกต้องโดยใช้คำสั่ง

	nginx -t

หาก config ไม่มีปัญหา เราสามารถสั่งให้ nginx reload configuation ใหม่ดังนี้

	nginx -s reload

หากต้องการกำหนด path ของ config ไฟล์เอง ไม่ใช้ default สามารถทำได้ดังนี้

	nginx -c /path/to/my-config.conf
	nginx -c /path/to/my-config.conf -t

สามารถดู help ได้ดังนี้

	nginx -h

### Reverse Proxy

การ setup ให้ nginx ทำงานเป็น reverse proxy

#### Example

เราจะ config ให้ forward request โดยระบุเป็น context (หรือ path ของ app) ตัวอย่าง เช่นต้องการ forward เฉพาะ `/examples` เท่านั้น

	server   listen port   context    url
	-------- ----------- ----------- --------------------------------------
	nginx      8000       /examples   http://localhost:8000/examples
	tomcat     8080       /examples   http://127.0.0.1:8080/examples

ตัวอย่างการ config เต็มดูที่ `conf/tomcat-proxy.conf`

    ...
    
    server {
        listen 8000;
        server_name localhost;
        
        root /path/to/www;
        index index.jsp index.html index.htm;

        location /examples {
            proxy_pass http://127.0.0.1:8080/examples;
        }

        error_page   404              /404.html;
        error_page   500 502 503 504  /50x.html;
    }
    
    ...

ทำการ run nginx โดยระบุ path ของ config ดังนี้

	nginx -c $PWD/conf/tomcat-proxy.conf

- ทดสอบ เข้า url http://localhost:8000/examples จะเป็นการ forward request จาก nginx ไปยัง tomcat
- ทดสอบ stop tomcat server แล้วเข้า url เดิมอีกครั้ง จะแสดงข้อความ `50x Service unavailable` เนื่องจากได้กำหนด `error_page` ไว้เมื่อเกิด error code `500, 502, 503, 504` จะ redirect ไปยังเพจ `50x.html`

จากตัวอย่าง หากต้องการเพิ่มหรือเปลี่ยน path ของ app ทำได้โดยการเปลี่ยน context ที่ directive `location` และ `proxy_pass` เช่น
- เปลี่ยน location `/examples` เป็น location `/hemodialysis_report`
- เปลี่ยน proxy_pass ... :8080/`examples`; เป็น proxy_pass ... :8080/`hemodialysis_report`;

### Load Balance

to be continued


## Windows 7 / 10

### TL;DR

dowload [nginx 1.17.0](http://nginx-win.ecsds.eu/download/nginx%201.17.0.1%20Crow.zip) และ extract ไปไว้ที่ C:\nginx

	C:\> cd C:\nginx
	C:\> nginx.exe
	
	or
	C:\> nginx.exe -c C:\path\to\conf\tomcat-proxy.conf

### Installation

- [official nginx for Windows](https://nginx.org/en/docs/windows.html)
- [http://nginx-win.ecsds.eu](http://nginx-win.ecsds.eu/) | [download nginx 1.17.0](http://nginx-win.ecsds.eu/download/nginx%201.17.0.1%20Crow.zip)

### Run as Windows Services

to be continued


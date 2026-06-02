## Container Planning

### Frontend Container

Tujuan:

* Menjalankan aplikasi React.

Technology:

* React
* Vite

Port:

* 5173

Folder:

* /frontend

Status:

* Menunggu implementasi Frontend Developer.

---


### Backend Container

Tujuan:

* Menjalankan API aplikasi.
* Menangani proses convert dan compress gambar.

Technology:

* NestJS
* Sharp

Port:

* 3000

Folder:

* /backend

Status:

* Menunggu implementasi Backend Developer.

---


### Nginx Container

Tujuan:

* Reverse Proxy.
* Menghubungkan frontend dan backend melalui satu domain.

Port:

* 80
* 443 (future)

Folder:

* /nginx

Status:

* Akan dikonfigurasi setelah frontend dan backend selesai.

---


## Planned Network Flow

User
↓
Nginx
├── Frontend (React)
└── Backend (NestJS API)
↓
Sharp

---


## Planned Docker Services

frontend
backend
nginx

---


## Expected Ports

Frontend:
5173

Backend:
3000

Nginx:
80

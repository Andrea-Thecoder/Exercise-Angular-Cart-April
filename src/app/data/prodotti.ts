/* import { Iprodotti } from "../models/Iprodotti";

export const prodottiVendita:Iprodotti = {
    "prodotti": [
      {
        "id": 1,
        "tipo": "laptop",
        "nome": "Laptop HP Pavilion",
        "descrizione": "Laptop potente e versatile per uso quotidiano",
        "prezzo": 799.99,
        "disponibilità": true,
        "marchio": "HP",
        "specifiche": {
          "processore": "Intel Core i5-1135G7",
          "RAM": "8GB DDR4",
          "memoria": "512GB SSD",
          "schermo": "15.6 pollici FHD",
          "sistema_operativo": "Windows 10 Home"
        }
      },
      {
        "id": 2,
        "tipo": "computer",
        "nome": "Desktop Dell Inspiron",
        "descrizione": "Desktop performante per il multitasking",
        "prezzo": 999.99,
        "disponibilità": true,
        "marchio": "Dell",
        "specifiche": {
          "processore": "AMD Ryzen 7 5800X",
          "RAM": "16GB DDR4",
          "memoria": "1TB HDD + 512GB SSD",
          "scheda_video": "NVIDIA GeForce RTX 3060",
          "sistema_operativo": "Windows 11 Home"
        }
      },
      {
        "id": 3,
        "tipo": "laptop",
        "nome": "MacBook Pro 13",
        "descrizione": "Laptop Apple con prestazioni straordinarie",
        "prezzo": 1299.99,
        "disponibilità": true,
        "marchio": "Apple",
        "specifiche": {
          "processore": "Apple M1",
          "RAM": "16GB",
          "memoria": "512GB SSD",
          "schermo": "13.3 pollici Retina",
          "sistema_operativo": "macOS Monterey"
        }
      },
      {
        "id": 4,
        "tipo": "smartphone",
        "nome": "iPhone 13 Pro",
        "descrizione": "Ultimo modello di iPhone con fotocamera avanzata",
        "prezzo": 1099.99,
        "disponibilità": true,
        "marchio": "Apple",
        "specifiche": {
          "schermo": "Super Retina XDR OLED 6.1 pollici",
          "processore": "Apple A15 Bionic",
          "memoria": "256GB",
          "fotocamera": "Tripla fotocamera da 12MP",
          "sistema_operativo": "iOS 15"
        }
      },
      {
        "id": 5,
        "tipo": "smartphone",
        "nome": "Samsung Galaxy S21 Ultra",
        "descrizione": "Potente smartphone Android con schermo dinamico",
        "prezzo": 1199.99,
        "disponibilità": true,
        "marchio": "Samsung",
        "specifiche": {
          "schermo": "Dynamic AMOLED 2X 6.8 pollici",
          "processore": "Exynos 2100",
          "memoria": "512GB",
          "fotocamera": "Quadrupla fotocamera da 108MP",
          "sistema_operativo": "Android 11"
        }
      },
      {
        "id": 6,
        "tipo": "smartphone",
        "nome": "Google Pixel 6 Pro",
        "descrizione": "Smartphone Google con fotocamera avanzata e IA integrata",
        "prezzo": 899.99,
        "disponibilità": true,
        "marchio": "Google",
        "specifiche": {
          "schermo": "OLED 6.7 pollici",
          "processore": "Google Tensor",
          "memoria": "128GB",
          "fotocamera": "Doppia fotocamera da 50MP",
          "sistema_operativo": "Android 12"
        }
      },
      {
        "id": 7,
        "tipo": "stampante",
        "nome": "Stampante Laser Brother HL-L2370DW",
        "descrizione": "Stampante laser monocromatica veloce e affidabile",
        "prezzo": 149.99,
        "disponibilità": true,
        "marchio": "Brother",
        "specifiche": {
          "tipo_stampa": "Laser monocromatica",
          "velocità_stampa": "36 ppm",
          "connessione": "Wi-Fi, Ethernet, USB",
          "funzionalità": ["Stampa fronte/retro automatica", "Stampa da dispositivi mobili"]
        }
      },
      {
        "id": 8,
        "tipo": "stampante",
        "nome": "Stampante Inkjet Epson EcoTank ET-2720",
        "descrizione": "Stampante inkjet a colori con serbatoio di inchiostro integrato",
        "prezzo": 249.99,
        "disponibilità": true,
        "marchio": "Epson",
        "specifiche": {
          "tipo_stampa": "Inkjet a colori",
          "risoluzione_stampa": "5760 x 1440 dpi",
          "connessione": "Wi-Fi, USB",
          "funzionalità": ["Stampa senza bordi", "Serbatoio di inchiostro ad alta capacità"]
        }
      },
      {
        "id": 9,
        "tipo": "stampante",
        "nome": "Stampante Multifunzione Canon PIXMA TR8620",
        "descrizione": "Stampante multifunzione a colori compatta e versatile",
        "prezzo": 179.99,
        "disponibilità": true,
        "marchio": "Canon",
        "specifiche": {
          "tipo_stampa": "Inkjet a colori",
          "funzioni": ["Stampa", "Copia", "Scansione", "Fax"],
          "connessione": "Wi-Fi, Bluetooth, USB",
          "funzionalità": ["ADF automatico", "Stampa da dispositivi mobili"]
        }
      },
      {
        "id": 10,
        "tipo": "laptop",
        "nome": "Microsoft Surface Pro 8",
        "descrizione": "Tablet 2-in-1 con prestazioni da laptop",
        "prezzo": 1299.99,
        "disponibilità": true,
        "marchio": "Microsoft",
        "specifiche": {
          "processore": "Intel Core i7",
          "RAM": "16GB",
          "memoria": "512GB SSD",
          "schermo": "12.3 pollici PixelSense",
          "sistema_operativo": "Windows 11 Pro"
        }
      },
      {
        "id": 11,
        "tipo": "laptop",
        "nome": "Dell XPS 13",
        "descrizione": "Laptop ultraportatile con display InfinityEdge",
        "prezzo": 1299.99,
        "disponibilità": true,
        "marchio": "Dell",
        "specifiche": {
          "processore": "Intel Core i7-1165G7",
          "RAM": "16GB LPDDR4x",
          "memoria": "512GB SSD",
          "schermo": "13.4 pollici 4K UHD+",
          "sistema_operativo": "Windows 11 Home"
        }
      },
      {
        "id": 12,
        "tipo": "laptop",
        "nome": "Asus ROG Strix G15",
        "descrizione": "Gaming laptop potente e robusto",
        "prezzo": 1499.99,
        "disponibilità": true,
        "marchio": "Asus",
        "specifiche": {
          "processore": "AMD Ryzen 9 5900HX",
          "RAM": "32GB DDR4",
          "memoria": "1TB SSD",
          "scheda_video": "NVIDIA GeForce RTX 3070",
          "sistema_operativo": "Windows 10 Pro"
        }
      },
      {
        "id": 13,
        "tipo": "smartphone",
        "nome": "OnePlus 9 Pro",
        "descrizione": "Smartphone premium con display fluido",
        "prezzo": 999.99,
        "disponibilità": true,
        "marchio": "OnePlus",
        "specifiche": {
          "schermo": "Fluid AMOLED 6.7 pollici",
          "processore": "Qualcomm Snapdragon 888",
          "memoria": "256GB",
          "fotocamera": "Quadrupla fotocamera da 48MP",
          "sistema_operativo": "OxygenOS 12"
        }
      },
      {
        "id": 14,
        "tipo": "smartphone",
        "nome": "Xiaomi Mi 11 Ultra",
        "descrizione": "Flagship Xiaomi con fotocamera versatile",
        "prezzo": 1199.99,
        "disponibilità": true,
        "marchio": "Xiaomi",
        "specifiche": {
          "schermo": "AMOLED 6.81 pollici",
          "processore": "Qualcomm Snapdragon 888",
          "memoria": "512GB",
          "fotocamera": "Tripla fotocamera da 50MP",
          "sistema_operativo": "MIUI 13"
        }
      },
      {
        "id": 15,
        "tipo": "smartphone",
        "nome": "Sony Xperia 1 III",
        "descrizione": "Smartphone Sony con display 4K e fotocamera professionale",
        "prezzo": 1299.99,
        "disponibilità": true,
        "marchio": "Sony",
        "specifiche": {
          "schermo": "OLED 6.5 pollici 4K HDR",
          "processore": "Qualcomm Snapdragon 888",
          "memoria": "256GB",
          "fotocamera": "Quad fotocamera da 12MP",
          "sistema_operativo": "Android 12"
        }
      },
      {
        "id": 16,
        "tipo": "stampante",
        "nome": "HP OfficeJet Pro 9015e",
        "descrizione": "Stampante multifunzione affidabile per l'ufficio",
        "prezzo": 229.99,
        "disponibilità": true,
        "marchio": "HP",
        "specifiche": {
          "tipo_stampa": "Inkjet a colori",
          "velocità_stampa": "22 ppm",
          "connessione": "Wi-Fi, Ethernet, USB",
          "funzionalità": ["Stampa fronte/retro automatica", "ADF automatico"]
        }
      },
      {
        "id": 17,
        "tipo": "stampante",
        "nome": "Epson WorkForce Pro WF-7840",
        "descrizione": "Stampante multifunzione A3 ad alte prestazioni",
        "prezzo": 399.99,
        "disponibilità": true,
        "marchio": "Epson",
        "specifiche": {
          "tipo_stampa": "Inkjet a colori",
          "velocità_stampa": "25 ppm",
          "formato_stampa": "A3",
          "connessione": "Wi-Fi, Ethernet, USB",
          "funzionalità": ["ADF automatico", "Stampa da dispositivi mobili"]
        }
      },
      {
        "id": 18,
        "tipo": "stampante",
        "nome": "Canon imageCLASS MF445dw",
        "descrizione": "Stampante laser multifunzione veloce e compatta",
        "prezzo": 349.99,
        "disponibilità": true,
        "marchio": "Canon",
        "specifiche": {
          "tipo_stampa": "Laser monocromatica",
          "velocità_stampa": "40 ppm",
          "connessione": "Wi-Fi, Ethernet, USB",
          "funzionalità": ["ADF automatico", "Stampa fronte/retro automatica"]
        }
      },
      {
        "id": 19,
        "tipo": "laptop",
        "nome": "Lenovo ThinkPad X1 Carbon",
        "descrizione": "Laptop ultraleggero e resistente per professionisti",
        "prezzo": 1599.99,
        "disponibilità": true,
        "marchio": "Lenovo",
        "specifiche": {
          "processore": "Intel Core i7-1165G7",
          "RAM": "16GB LPDDR4x",
          "memoria": "1TB SSD",
          "schermo": "14 pollici WQHD",
          "sistema_operativo": "Windows 10 Pro"
        }
      },
      {
        "id": 20,
        "tipo": "stampante",
        "nome": "Stampante Laser HP Color LaserJet Pro M283fdw",
        "descrizione": "Stampante laser a colori con funzionalità multifunzione",
        "prezzo": 449.99,
        "disponibilità": true,
        "marchio": "HP",
        "specifiche": {
          "tipo_stampa": "Laser a colori",
          "velocità_stampa": "22 ppm",
          "connessione": "Wi-Fi, Ethernet, USB",
          "funzionalità": ["Stampa fronte/retro automatica", "ADF automatico", "Stampa da dispositivi mobili"]
        }
      }
    ]
} */
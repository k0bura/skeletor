---
title: "Enhanced Options Slot Pinout"
description: "Complete 50-pin connector pinout and ESP32 wiring reference for the Compaq Portable 486c Enhanced Options Slot"
date: 2025-02-16
---

## 50-Pin Connector Pinout

### Pins 1-25

| Pin | Signal | Description |
|-----|--------|-------------|
| 1 | GND | Ground |
| 2 | D0 | Data bit 0 |
| 3 | D1 | Data bit 1 |
| 4 | D2 | Data bit 2 |
| 5 | D3 | Data bit 3 |
| 6 | D4 | Data bit 4 |
| 7 | D5 | Data bit 5 |
| 8 | D6 | Data bit 6 |
| 9 | D7 | Data bit 7 |
| 10 | Select | Board select |
| 11 | IOW | I/O Write (active low) |
| 12 | IOR | I/O Read (active low) |
| 13 | IRQ | Interrupt request |
| 14 | Bus Ready | Wait-state insertion |
| 15 | +5V | Power |
| 16 | +5V | Power |
| 17 | RST | System reset |
| 18 | XA08 | Address line A8 |
| 19 | Add 1 | Address line A0 |
| 20 | Add 2 | Address line A1 |
| 21 | Mclock | Master clock |
| 22 | Reserve 1 | Reserved |
| 23 | Reserve 2 | Reserved |
| 24 | Slot-on | Slot active |
| 25 | SPKDRV | Speaker drive |

### Pins 26-50

| Pin | Signal | Description |
|-----|--------|-------------|
| 26 | GND | Ground |
| 27 | GND | Ground |
| 28 | DMA | DMA signal |
| 29 | D15 | Data bit 15 |
| 30 | D14 | Data bit 14 |
| 31 | D13 | Data bit 13 |
| 32 | D12 | Data bit 12 |
| 33 | D11 | Data bit 11 |
| 34 | D10 | Data bit 10 |
| 35 | D9 | Data bit 9 |
| 36 | D8 | Data bit 8 |
| 37 | Add 3 | Address line A2 |
| 38 | Add 4 | Address line A3 |
| 39 | Add 5 | Address line A4 |
| 40 | Add 6 | Address line A5 |
| 41 | Add 7 | Address line A6 |
| 42 | Add 8 | Address line A7 |
| 43 | Add 9 | Address line A9 |
| 44 | SLOT-DMA- | DMA request (active low) |
| 45 | T-C | Terminal count |
| 46 | SLOT-IR08 | IRQ8 (second PIC) |
| 47 | IO16 | 16-bit I/O capable |
| 48 | SLOT-DRQ | DMA request |
| 49 | SLOT-IOEN | Slot I/O enable |
| 50 | SLOT-DAK | DMA acknowledge |

## ESP32 Wiring Map

Only the low byte of the data bus is used. A UART only needs 8 bits.

| Signal | Pin | Dir | GPIOs | Notes |
|--------|-----|-----|-------|-------|
| D0-D7 | 2-9 | Bidir | 8 | Via 74LVC245 |
| IOR | 12 | In | 1 | Active low |
| IOW | 11 | In | 1 | Active low |
| Add 1 | 19 | In | 1 | A0, register select |
| Add 2 | 20 | In | 1 | A1, register select |
| Add 3 | 37 | In | 1 | A2, register select |
| XA08 | 18 | In | 1 | Base address decode |
| Add 4-9 | 38-43 | In | 6 | Base address decode |
| Select | 10 | In | 1 | Board select |
| SLOT-IOEN | 49 | In | 1 | Slot I/O enable |
| RST | 17 | In | 1 | System reset |
| IRQ | 13 | Out | 1 | To system PIC |
| GND | 1, 26, 27 | - | - | Common ground |

Total: ~24 GPIOs. All 5V inputs need level shifting to 3.3V.

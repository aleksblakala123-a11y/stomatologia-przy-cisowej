# Stomatologia Przy Cisowej — strona gabinetu

Statyczna strona gabinetu stomatologicznego przy ul. Cisowej 8 w Świdniku.
Czysty HTML, CSS i minimum JavaScriptu — bez frameworków i bez procesu budowania.

## Uruchomienie lokalne

Wystarczy otworzyć `index.html` w przeglądarce. Dla pełnej zgodności ze ścieżkami
(m.in. `sitemap.xml`, `robots.txt`) lepiej podać katalog przez lokalny serwer, np.:

```bash
npx --yes serve .
```

## Struktura

| Ścieżka | Zawartość |
| --- | --- |
| `index.html` | Strona główna — hero, usługi, cennik, przebieg wizyty, galeria, zespół, opinie, kontakt |
| `uslugi.html`, `uslugi/` | Przegląd usług i podstrony wybranych zabiegów |
| `cennik.html` | Pełny cennik |
| `o-nas.html`, `kontakt.html` | Zespół oraz dane kontaktowe, godziny przyjęć i formularz |
| `css/style.css` | Cały system wizualny — tokeny kolorów, typografia, komponenty |
| `js/main.js` | Menu mobilne i stały pasek akcji na telefonie |
| `images/` | Zdjęcia użyte na stronie (hero, galeria, ikony) |
| `_source-photos-nieuzywane/` | Archiwum zdjęć źródłowych, nieużywanych na stronie |

## System wizualny

Kierunek „klinicznie czysto": biel, włoskowe linie zamiast cieni, jeden kolor akcji.

- Zieleń marki `#0E3B36`, kolor akcji (przyciski) `#12857A`, tło pomocnicze `#F1F6F5`
- Kroje: Archivo (nagłówki) i Public Sans (tekst), wczytywane z Google Fonts
- Wszystkie wartości są tokenami CSS w `:root` — zmiana koloru czy odstępu w jednym miejscu
  przechodzi przez całą stronę

## Do uzupełnienia przez gabinet

Miejsca oznaczone w kodzie jako `TODO: CLIENT CONFIRMATION`:

- **Ceny** — cały `cennik.html` oraz zajawka cennika na stronie głównej
- **Opinie pacjentów** — do przeniesienia z profilu Google
- **Godziny przyjęć** — wpisane na podstawie wizytówki w Google, wymagają potwierdzenia
  (występują w pasku górnym, stopce, sekcji kontaktu, `kontakt.html` i danych strukturalnych)
- **Portrety zespołu** — obecnie inicjały na jednolitym tle
- **Formularze** — hero na stronie głównej i formularz na `kontakt.html` nie mają jeszcze
  podpiętego odbiorcy; wymagają adresu e-mail recepcji lub usługi wysyłki
- **Treść zgody RODO** i link do polityki prywatności
- **Docelowa domena** — w `canonical`, Open Graph i `sitemap.xml` wpisano
  `https://www.stomatologia-cisowa.pl/`
- **NIP/REGON** w stopce, jeśli wymagane

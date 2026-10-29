// Lista aktywów, które aplikacja obserwuje.
//
// Nazewnictwo wzorowane na XTB:
//   x = symbol, pod jakim instrument widać w XTB (OIL.WTI, GOLD, US500...). Jeśli nie znamy symbolu XTB, pole zostaje puste
//       i aplikacja pokaże symbol z Yahoo Finance.
//   s = symbol w Yahoo Finance (stąd pobieramy ceny),
//   n = nazwa po polsku.
// Chcesz dodać coś swojego? Dopisz nowy wpis tutaj (i ewentualnie w rules.js).

export const GROUP_ORDER = ['Surowce', 'Indeksy', 'Forex', 'Krypto', 'ETF', 'Obligacje'];

export const ASSETS = [
  // --- Surowce ---
  { id: 'ropa', icon: '🛢️', name: 'Ropa naftowa', group: 'Surowce', symbols: [{ x: 'OIL.WTI', s: 'CL=F', n: 'Ropa WTI' }, { x: 'OIL', s: 'BZ=F', n: 'Ropa Brent' }] },
  { id: 'gaz', icon: '🔥', name: 'Gaz ziemny', group: 'Surowce', symbols: [{ x: 'NATGAS', s: 'NG=F', n: 'Gaz ziemny (USA)' }, { x: null, s: 'TTF=F', n: 'Gaz TTF (Europa)' }] },
  { id: 'zloto', icon: '🥇', name: 'Złoto', group: 'Surowce', symbols: [{ x: 'GOLD', s: 'GC=F', n: 'Złoto' }] },
  { id: 'srebro', icon: '🥈', name: 'Srebro', group: 'Surowce', symbols: [{ x: 'SILVER', s: 'SI=F', n: 'Srebro' }] },
  { id: 'miedz', icon: '🔩', name: 'Miedź', group: 'Surowce', symbols: [{ x: 'COPPER', s: 'HG=F', n: 'Miedź' }] },
  { id: 'zboza', icon: '🌾', name: 'Zboża', group: 'Surowce', symbols: [{ x: 'WHEAT', s: 'ZW=F', n: 'Pszenica' }, { x: 'CORN', s: 'ZC=F', n: 'Kukurydza' }] },

  // --- Indeksy ---
  { id: 'akcje_usa', icon: '🇺🇸', name: 'Akcje USA', group: 'Indeksy', symbols: [{ x: 'US500', s: '^GSPC', n: 'S&P 500' }] },
  { id: 'technologia', icon: '💻', name: 'Technologia', group: 'Indeksy', symbols: [{ x: 'US100', s: '^NDX', n: 'Nasdaq 100' }] },
  { id: 'akcje_europa', icon: '🇪🇺', name: 'Akcje Europa', group: 'Indeksy', symbols: [{ x: 'EU50', s: '^STOXX50E', n: 'Euro Stoxx 50' }, { x: 'DE40', s: '^GDAXI', n: 'DAX' }] },
  { id: 'akcje_pl', icon: '🇵🇱', name: 'Akcje Polska', group: 'Indeksy', symbols: [{ x: 'PL20', s: 'WIG20.WA', n: 'WIG20' }] },

  // --- Forex ---
  { id: 'usd', icon: '💵', name: 'Dolar (USD)', group: 'Forex', symbols: [{ x: 'USDX', s: 'DX-Y.NYB', n: 'Indeks dolara' }] },
  {
    id: 'pln', icon: '🪙', name: 'Złoty (PLN)', group: 'Forex',
    symbols: [{ x: 'USDPLN', s: 'PLN=X', n: 'USD/PLN' }, { x: 'EURPLN', s: 'EURPLN=X', n: 'EUR/PLN' }],
    note: 'Kurs pokazuje, ile złotych kosztuje 1 USD / 1 EUR. Wzrost kursu = słabszy złoty.',
  },

  // --- Krypto ---
  { id: 'krypto', icon: '₿', name: 'Kryptowaluty', group: 'Krypto', symbols: [{ x: 'BITCOIN', s: 'BTC-USD', n: 'Bitcoin' }, { x: 'ETHEREUM', s: 'ETH-USD', n: 'Ethereum' }] },

  // --- ETF (sektory) ---
  { id: 'obronnosc', icon: '🛡️', name: 'Obronność', group: 'ETF', symbols: [{ x: null, s: 'ITA', n: 'ETF lotnictwo i obronność' }] },
  { id: 'banki', icon: '🏦', name: 'Banki', group: 'ETF', symbols: [{ x: null, s: 'KBE', n: 'ETF banki' }] },
  { id: 'transport', icon: '✈️', name: 'Linie lotnicze i transport', group: 'ETF', symbols: [{ x: null, s: 'JETS', n: 'ETF linie lotnicze' }] },
  { id: 'odnawialne', icon: '🌱', name: 'Energia odnawialna', group: 'ETF', symbols: [{ x: null, s: 'ICLN', n: 'ETF czysta energia' }] },

  // --- Obligacje ---
  {
    id: 'obligacje', icon: '🧾', name: 'Obligacje USA', group: 'Obligacje',
    symbols: [{ x: null, s: '^TNX', n: 'Rentowność 10-latek USA (%)' }],
    note: 'Strzałki dotyczą CEN obligacji. Cena obligacji rośnie, gdy rentowność (pokazana obok) spada.',
  },
];

export const ASSET_BY_ID = Object.fromEntries(ASSETS.map((a) => [a.id, a]));

// Tekst z symbolami do pokazania pod nazwą aktywa, np. "OIL.WTI · OIL"
export function tickersOf(asset) {
  return asset.symbols.map((s) => s.x || s.s).join(' · ');
}

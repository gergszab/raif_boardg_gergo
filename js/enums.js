let OwnersEnum;
(function (OwnersEnum) {
  OwnersEnum['Bank'] = 'Bank';
  OwnersEnum['Player1'] = 'Player1';
  OwnersEnum['Player2'] = 'Player2';
})(OwnersEnum || (OwnersEnum = {}));

let TileRowEnum;
(function (TileRowEnum) {
  TileRowEnum['Bottom'] = 0;
  TileRowEnum['Left'] = 1;
  TileRowEnum['Top'] = 2;
  TileRowEnum['Right'] = 3;
})(TileRowEnum || (TileRowEnum = {}));

let TileTypesEnum;
(function (TileTypesEnum) {
  TileTypesEnum['Start'] = 'Start';
  TileTypesEnum['Prison'] = 'Prison';
  TileTypesEnum['FreeParking'] = 'FreeParking';
  TileTypesEnum['GoToPrison'] = 'GoToPrison';
  TileTypesEnum['Property'] = 'Property';
  TileTypesEnum['Train'] = 'Train';
  TileTypesEnum['PublicWorks'] = 'PublicWorks';
  TileTypesEnum['SurpriseCard'] = 'SurpriseCard';
  TileTypesEnum['LuckyCard'] = 'LuckyCard';
  TileTypesEnum['Tax'] = 'Tax';
})(TileTypesEnum || (TileTypesEnum = {}));

let TileNamesEnum;
(function (TileNamesEnum) {
  TileNamesEnum['Start'] = 'Start';
  TileNamesEnum['Piac_ter'] = 'Piac tér';
  TileNamesEnum['Torok_udvar'] = 'Török udvar';
  TileNamesEnum['Jovedelemado'] = 'Jövedelemadó';
  TileNamesEnum['Eszaki_vasutvonal'] = 'Északi vasútvonal';
  TileNamesEnum['Nagykorosi_ut'] = 'Nagykőrösi út';
  TileNamesEnum['Lestar_ter'] = 'Lestár tér';
  TileNamesEnum['Kisfaludy_ut'] = 'Kisfaludy út';
  TileNamesEnum['Borton'] = 'Börtön';
  TileNamesEnum['Egyetem_utca'] = 'Egyetem utca';
  TileNamesEnum['Elektromos_muvek'] = 'Elektromos művek';
  TileNamesEnum['Szinhaz_ter'] = 'Színház tér';
  TileNamesEnum['Janus_Pannonius_ut'] = 'Janus Pannonius út';
  TileNamesEnum['Keleti_vasutvonal'] = 'Keleti vasútvonal';
  TileNamesEnum['Petofi_ter'] = 'Petőfi tér';
  TileNamesEnum['Nagyerdo'] = 'Nagyerdő';
  TileNamesEnum['Bethlen_Gabor_utca'] = 'Bethlen Gábor utca';
  TileNamesEnum['Ingyen_parkolo'] = 'Ingyen parkoló';
  TileNamesEnum['Mora_park'] = 'Móra park';
  TileNamesEnum['Oskola_utca'] = 'Oskola utca';
  TileNamesEnum['Dom_ter'] = 'Dóm tér';
  TileNamesEnum['Deli_vasutvonal'] = 'Déli vasútvonal';
  TileNamesEnum['Dobo_ter'] = 'Dobó tér';
  TileNamesEnum['Almagyar_utca'] = 'Almagyar utca';
  TileNamesEnum['Vizmu'] = 'Vízmű';
  TileNamesEnum['Gardonyi_ut'] = 'Gárdonyi út';
  TileNamesEnum['Irany_a_borton'] = 'Irány a börtön!';
  TileNamesEnum['Kofarago_ter'] = 'Kőfaragó tér';
  TileNamesEnum['Ovaros'] = 'Óváros';
  TileNamesEnum['Otvos_utca'] = 'Ötvös utca';
  TileNamesEnum['Nyugati_vasutvonal'] = 'Nyugati vasútvonal';
  TileNamesEnum['Vorosmarty_ter'] = 'Vörösmarty tér';
  TileNamesEnum['Potado'] = 'Pótadó';
  TileNamesEnum['Dunakorzo'] = 'Dunakorzó';
  TileNamesEnum['Szerencsekartya'] = 'Szerencse kártya';
  TileNamesEnum['Meglepeteskartya'] = 'Meglepetés kártya';
})(TileNamesEnum || (TileNamesEnum = {}));

let DeckTypeEnum;
(function (DeckTypeEnum) {
  DeckTypeEnum['Surprise'] = 'Surprise';
  DeckTypeEnum['Lucky'] = 'Lucky';
})(DeckTypeEnum || (DeckTypeEnum = {}));

let CardTypeEnum;
(function (DeckTypeEnum) {
  CardTypeEnum['Surprise'] = 'Surprise';
  CardTypeEnum['Lucky'] = 'Lucky';
})(CardTypeEnum || (CardTypeEnum = {}));

let CardEffectEnum;
(function (DeckTypeEnum) {
  CardEffectEnum['Addition'] = 'Addition';
  CardEffectEnum['Subtraction'] = 'Subtraction';
  CardEffectEnum['Other'] = 'Other';
})(CardEffectEnum || (CardEffectEnum = {}));

let CardsTextEnum;
(function (DeckTypeEnum) {
  CardsTextEnum['FreeEscape'] = 'Ingyen szabadulhatsz a börtönből.';
  CardsTextEnum['PayByPropertySmall'] = 'Fizess minden házad után 2500 Ft-ot és minden szállodád után 10.000 Ft-ot.';
  CardsTextEnum['PayByPropertyBig'] = 'Fizess minden házad után 5000 Ft-ot és minden szállodád után 20.000 Ft-ot.';
  CardsTextEnum['Fizess1'] = 'Fizess 1000 Ft-ot.';
  CardsTextEnum['Fizess2'] = 'Fizess 2000 Ft-ot.';
  CardsTextEnum['Fizess3'] = 'Fizess 3000 Ft-ot.';
  CardsTextEnum['Fizess4'] = 'Fizess 4000 Ft-ot.';
  CardsTextEnum['Fizess5'] = 'Fizess 5000 Ft-ot.';
  CardsTextEnum['Fizess6'] = 'Fizess 6000 Ft-ot.';
  CardsTextEnum['Fizess7'] = 'Fizess 8000 Ft-ot.';
  CardsTextEnum['Fizess8'] = 'Fizess 10.000 Ft-ot.';
  CardsTextEnum['Kapsz1'] = 'Kapsz 1000 Ft-ot.';
  CardsTextEnum['Kapsz2'] = 'Kapsz 2000 Ft-ot.';
  CardsTextEnum['Kapsz3'] = 'Kapsz 3000 Ft-ot.';
  CardsTextEnum['Kapsz4'] = 'Kapsz 4000 Ft-ot.';
  CardsTextEnum['Kapsz5'] = 'Kapsz 5000 Ft-ot.';
  CardsTextEnum['Kapsz6'] = 'Kapsz 6000 Ft-ot.';
  CardsTextEnum['Kapsz7'] = 'Kapsz 8000 Ft-ot.';
  CardsTextEnum['Kapsz8'] = 'Kapsz 9000 Ft-ot.';
  CardsTextEnum['Kapsz9'] = 'Kapsz 10.000 Ft-ot.';
})(CardsTextEnum || (CardsTextEnum = {}));

export { OwnersEnum, TileRowEnum, TileTypesEnum, TileNamesEnum, DeckTypeEnum, CardTypeEnum, CardEffectEnum, CardsTextEnum};

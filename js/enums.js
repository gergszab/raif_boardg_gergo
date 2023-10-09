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


export { OwnersEnum, TileRowEnum, TileTypesEnum, TileNamesEnum };

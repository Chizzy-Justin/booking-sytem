var cityArray = [ '<option class="text-muted">Select City...</option>',
'<option class="text-muted">Select City...</option><option>Aba</option><option>Abiriba</option><option>Apumiri</option><option>Arochukwu</option><option>Bende</option><option>Nkporo</option><option>Ohafia</option><option>Umuahia</option>',
'<option class="text-muted">Select City...</option><option>Alkalawa</option><option>Belel</option><option>Demsa</option><option>Fufore</option><option>Gashaka</option><option>Ganya</option><option>Girei</option><option>Gombi</option><option>Jada</option><option>Song</option><option>Shelleng</option>',
' <option class="text-muted">Select City...</option><option>Abak</option><option>Abasi</option><option>Ibeno</option><option>Eket</option><option>Etinan</option><option>Ikot</option><option>Ikot-Ekpene</option><option>Iron</option><option>ITU</option><option>Itu-Mbonuso</option><option>Nsit-Ibom</option><option>Uyo</option>',
'<option class="text-muted">Select City...</option> <option>Awka</option><option>Nnewi</option><option>Ogbaru</option><option>Okpoko</option><option>Onitsha</option>',
'<option class="text-muted">Select City...</option> <option>Azare</option><option>Bauchi</option><option>Dass</option><option>Jamaare</option><option>Ningi</option>',
'<option class="text-muted">Select City...</option> <option>Amassoma</option><option>Brass city</option><option>Odi</option><option>Ogbia</option><option>Yenagoa</option>',
' <option class="text-muted">Select City...</option><option>Gboko</option><option>Katsina-Ala</option><option>Obi</option><option>Otukpa</option><option>Otukpo</option><option>Ugbokolo</option>',
'<option class="text-muted">Select City...</option><option>Baga</option><option>Bama</option><option>Bayo</option><option>Biu</option><option>Borno Yassa</option>',
'<option class="text-muted">Select City...</option><option>Ikom</option><option>Ekiem</option><option>Etomi</option><option>Ugep</option><option>Ukelle</option>',
' <option class="text-muted">Select City...</option><option>Asaba</option><option>Burutu</option><option>Koko</option><option>Sapele</option><option>Ughelli</option><option>Warri</option>',
' <option class="text-muted">Select City...</option><option>Abakaliki</option><option>Afikpo</option><option>Ikwo</option><option>Ishiagu</option><option>Onueke</option>',
' <option class="text-muted">Select City...</option><option>Akoko-Edo</option><option>Egor</option><option>Esan</option><option>Oredo</option><option>Ovia</option><option>Owan</option>',
' <option class="text-muted">Select City...</option><option>Ado-Ekiti</option><option>Aiyekire(Gbonyin)</option><option>Ikere</option><option>Oye</option>',
'<option class="text-muted">Select City...</option><option>Agbani</option><option>Awgu</option><option>Aninri</option><option>Enugu</option><option>Nsukka</option><option>Udi</option>',
' <option class="text-muted">Select City...</option><option>Bajoga</option><option>Billiri</option><option>Dukku</option><option>Kaltungo</option>',
'<option class="text-muted">Select City...</option><option>Okigwe</option><option>Orlu</option><option>Owerri</option>',
'<option class="text-muted">Select City...</option><option>Birnin</option><option>Dutse</option><option>Hadejia</option><option>Sule</option>',
'<option class="text-muted">Select City...</option><option>Kachia</option><option>Kaduna</option><option>Kafanchan</option><option>Kagarko</option><option>Kagoma</option><option>Kagoro</option>',
'<option class="text-muted">Select City...</option><option>Dala</option><option>Fagge</option><option>Gwale</option><option>Kano Municipal</option><option>Tarauni</option><option>Kagoro</option>',
' <option class="text-muted">Select City...</option><option>Bakori</option><option>Batagarawa</option><option>Batsari</option><option>Baure</option><option>Bindawa</option>',
' <option class="text-muted">Select City...</option><option>Argungu</option><option>Bagudo</option><option>Jega</option><option>Kamba</option><option>Koko</option><option>Yauri</option><option>Zuru</option>',
' <option class="text-muted">Select City...</option><option>Ajaokuta</option><option>Bagudo</option><option>Bassa</option><option>Dekina</option><option>Ibaji</option><option>Idah</option><option>Igalamela-Odolu</option>',
' <option class="text-muted">Select City...</option><option>Ilorin</option><option>Oke-Ero</option><option>Offa</option>',
' <option class="text-muted">Select City...</option><option>Ajah</option><option>Badagry</option><option>Epe</option><option>Ikeji</option><option>Ikorodu</option><option>Mushin</option><option>Yaba</option>',
' <option class="text-muted">Select City...</option><option>Akwanga</option><option>Doma</option><option>Karu</option><option>Keffi</option><option>Lafia</option><option>Wamba</option>',
'<option class="text-muted">Select City...</option><option>Bida</option><option>Kontagora</option><option>Minna</option><option>Suleja</option><option>Lafia</option><option>Wamba</option><option>Yaba</option>',
' <option class="text-muted">Select City...</option><option>Abeokuta</option><option>Ado-Odo</option><option>Ewekoro</option><option>Ifo</option><option>Ijebu</option>',
' <option class="text-muted">Select City...</option><option>Akure</option><option>Ijare</option><option>Ilara</option><option>ore</option><option>Oka</option>',
'<option class="text-muted">Select City...</option><option>Ife</option><option>Ilesha</option><option>Ila</option><option>Iwo</option><option>Obokun</option><option>Olorunda</option><option>Oshogbo</option>',
' <option class="text-muted">Select City...</option><option>Atiba</option><option>Egbeda</option><option>Ibadan</option><option>Ido</option><option>Irepo</option><option>Oluyole</option><option>Saki</option>',
'  <option class="text-muted">Select City...</option><option>Barkin Ladi</option><option>Bukuru</option><option>Langtang</option><option>Pankshin</option><option>Shendam</option><option>Vom</option>',
' <option class="text-muted">Select City...</option><option>Abalama</option><option>Bodo</option><option>Degema Town</option><option>Eberi</option><option>Okoloma</option><option>Rumuokoro</option><option>Umuru</option>',
' <option class="text-muted">Select City...</option><option>Asara</option><option>Gigane</option><option>Salame</option><option>Tambagarka</option>',
' <option class="text-muted">Select City...</option><option>Ardo kola</option><option>Bali</option><option>Donga</option><option>Gassol</option><option>Ibi</option><option>Jalingo</option>',
' <option class="text-muted">Select City...</option><option>Bade</option><option>Bursari</option><option>Damaturu</option><option>Gujba</option><option>Fika</option><option>Fune</option>',
' <option class="text-muted">Select City...</option><option>Anka</option><option>Bakura</option><option>Bungudu</option><option>Gummi</option><option>Gusau</option',
'<option class="text-muted">Select City...</option><option>Abaji</option><option>Bwari</option><option>Gwagwalada</option><option>Kuje</option><option>Kwali</option>']


var x;
function city(){
  
    x = document.getElementById("leavefrom").value;    
  document.getElementById("citySelect").innerHTML = cityArray[x]
  console.log(x)
}

function secondCity(){
   x = document.getElementById("leaveto").value;    
  document.getElementById("secondCitySelect").innerHTML = cityArray[x]
  console.log(x)

}
function citytwo(){
  
  x = document.getElementById("leavefromtwo").value;    
document.getElementById("citySelecttwo").innerHTML = cityArray[x]
console.log(x)
}

function secondCitytwo(){
 x = document.getElementById("leavetotwo").value;    
document.getElementById("secondCitySelecttwo").innerHTML = cityArray[x]
console.log(x)

}
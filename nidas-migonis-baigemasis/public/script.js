const Http = new XMLHttpRequest();



array.forEach(element => {
  
const url='https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
} 

})


/*let Data = []

let žaidimuIDs = [420, 450, 480]


Foreach(ID in žaidimuIDs){
   let responseData = Webrequest(url.com/?appid=${ID});
   let parsedData = responseData.AppNews;
   Data.Add(parsedData);
}

Console.log(Data)*/
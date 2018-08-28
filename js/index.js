let dingshiqi
let i = 1
let init =()=>dingshiqi = window.setInterval("tp()",2000)
init()
let tp =()=>{
    i++
    if(i>2){
        i=1
    }
    let ad = document.getElementsByClassName("ad-img")[0]
    ad.src = "image/guanggao"+i+".jpg"
}

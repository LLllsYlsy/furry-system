//添加界面
document.getElementById("add_web").addEventListener("click",display_block);
//取消，清空输入框的值
document.getElementById("pop_window_add_cancel").addEventListener("click",pop_window_add_cancel);
//搜索
document.getElementById("search_button").addEventListener("click",search);
//添加确定,同时将输入框内的值清空
document.getElementById("pop_window_add_sure").addEventListener("click",add_sure);
document.getElementById("pop_window_add_sure").addEventListener("click",pop_window_add_cancel);
//添加界面
function display_block(){
    var display_open_1=document.getElementById("pop_window");
    var display_open_2=document.getElementById("pop_window_add");
    display_open_1.style.display="block";
    display_open_2.style.display="block";
}
//取消
function pop_window_add_cancel(){
    var display_open_3=document.getElementById("pop_window");
    var display_open_4=document.getElementById("pop_window_add");
    display_open_3.style.display="none";
    display_open_4.style.display="none";
    document.getElementById("pop_window_add_title_input").value="";
    document.getElementById("pop_window_add_text_input").value="";
    document.getElementById("pop_window_add_url_input").value="";
}
//搜索
function search(){
    var search_text=document.getElementById("search_text").value;
    var x="https://www.baidu.com/s?wd="+search_text;
    window.open(x);
    document.getElementById("search_text").placeholder="百度一下";
}
//添加确定
function add_sure(){
    var aEle=document.createElement("a");
    var imgEle=document.createElement("img");
    var divEle=document.createElement("div");
    var hEle=document.createElement("h");
    var pEle=document.createElement("p");//定义元素节点
    var hgetEle=document.createTextNode(document.getElementById("pop_window_add_title_input").value);
    var pgetEle=document.createTextNode(document.getElementById("pop_window_add_text_input").value);
    var agetEle=document.getElementById("pop_window_add_url_input").value;
    hEle.appendChild(hgetEle);
    pEle.appendChild(pgetEle);//添加文本
    aEle.setAttribute("class","navigation_choose");
    aEle.setAttribute("target","_blank");
    aEle.setAttribute("href","http://"+agetEle);
    imgEle.setAttribute("class","image_pip");
    imgEle.setAttribute("src","https://"+agetEle+"/favicon.ico");//获取网站的图标
    //若用http查询得到的
    divEle.setAttribute("class","navigation_choose_text");
    hEle.setAttribute("class","navigation_choose_ele");
    pEle.setAttribute("class","navigation_choose_par");//加入块
    document.getElementById("background_middle").appendChild(aEle);
    aEle.appendChild(imgEle);
    aEle.appendChild(divEle);
    divEle.appendChild(hEle);
    divEle.appendChild(pEle);
    //将窗口隐藏,
    // var display_open_5=document.getElementById("pop_window");
    // var display_open_6=document.getElementById("pop_window_add");
    // display_open_5.style.display="none";
    // display_open_6.style.display="none";
}
<script type="text/javascript" >
function initTree(t) {
    var tree=document.getElementById(t);//������
    tree.style.display="none";//������ʽΪ������ʽ������ʾ
    var lis=tree.getElementsByTagName("li");
    for(var i=0;i<lis.length;i++) {  //ȡ����Ҫ�ĵ�����
        lis[i].id="li"+i;
        var uls=lis[i].getElementsByTagName("ul"); //�ӵ�����
        if(uls.length!=0) {
            uls[0].id="ul"+i;
            uls[0].style.display="none";
            var as=lis[i].getElementsByTagName("a"); //�ӵ�����������
            as[0].id="a"+i;
            as[0].className="folder";
            as[0].href="#this";
            as[0].tget=uls[0];
            as[0].onclick=function() {
                openTag(this,this.tget);
            }
        }
    }
    tree.style.display="block";
}
function openTag(a,t) {
    if(t.style.display=="block") { //���һЩչ�����ٵ��һ���۵�
        t.style.display="none";
        a.className="folder";
    } else {
        t.style.display="block";
        a.className="";
    }
}
window.onload=function() {
    initTree("main_nav");
}
</script>
<link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="http://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
	<script src="http://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
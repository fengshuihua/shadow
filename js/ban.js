$(function(){
    document.onkeydown = function() {
            var e = window.event || arguments[0];
            //屏蔽F12
            if(e.keyCode == 123) {
                return false;
             //屏蔽Ctrl+Shift+I
            } else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
                return false;
            //屏蔽Shift+F10
            } else if((e.shiftKey) && (e.keyCode == 121)){
                 return false;
            //屏蔽Ctrl+U
            } else if((e.ctrlKey) && (e.keyCode == 85)){
                return false;
            //禁用shift
            // } else if(e.shiftKey){
                // return false;
            //禁用ctrl
            // } else if(e.ctrlKey){
                // return false;
            //禁用alt
            // } else if(e.altKey){
                // return false;
            }
        };
        //屏蔽右键单击
        document.oncontextmenu = function() {
            return false;
        };
});

/**
* @file 本地模块定义，实现
* 
*/



 (function (global) {

            var lmd = {

                'version': '0.0.1',
                'debug': false
            };







            


            var Stylesheet = {
                //保存已经发起请求的path路径
                _paths: [],


                create: function (opt) {
                    if (opt.src in this._paths) {
                        return;
                    }
                    this._paths[opt.src] = true;
                    var head = document.getElementsByTagName('head')[0];
                    var node = document.createElement('link');
                    opt.charset && (node.charset = opt.charset);
                    node.href = this._domain + '/' + opt.src;
                    node.rel = 'stylesheet';
                    head.insertBefore(node, head.firstChild);
                }
            };

            var Script = {
                //发起script请求
                create: function (opt) {
                    if (opt.src in this._paths) {
                        return;
                    }
                    this._paths[opt.src] = true;
                    forEach(this._rules, function (modify) {
                        modify.call(null, opt);
                    });
                    var head = document.getElementsByTagName('head')[0];
                    var node = document.createElement('script');
                    node.type = opt.type || 'text/javascript';
                    opt.charset && (node.charset = opt.charset);
                    node.src = opt.src;
                    node.onload = node.onerror = node.onreadystatechange = function () {
                        if ((!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                            // Ensure only run once and handle memory leak in IE
                            node.onload = node.onerror = node.onreadystatechange = null;
                            // Remove the script to reduce memory leak
                            if (node.parentNode && !F.debug) {
                                head.removeChild(node)
                            }
                            // Dereference the node
                            node = undefined;
                            opt.loaded && opt.loaded();
                        }
                    };
                    head.insertBefore(node, head.firstChild);
                },
                //保存已经发起请求的path路径
                _paths: {}

               
            };



            'lmd' in window || (window.lmd = lmd);




        })(this);


        console.log(lmd.version);
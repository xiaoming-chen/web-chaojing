let default_domain = 'http://192.168.7.245:9028';
if (window.location.host === 'sz1-test-sep-static.oss-cn-shenzhen.aliyuncs.com') {
    default_domain = 'http://39.108.114.71:9208';
}

function request(method, ops) {
    var options = $.extend({
        url: "/",
        params: {},
        typeData: "json",
        contentType: undefined,
        domain: default_domain,
        callback: function(responseData) {},
        loadStart: function() { $.AMUI.progress.start(); },
        loadDone: function() { $.AMUI.progress.done(); }
    }, ops || {});

    //加载进度条
    options.loadStart();

    $.ajax({
        type: method,
        url: options.domain + options.url,
        data: options.params,
        timeout: 15000,
        // xhrFields: {
        //     withCredentials: true
        // },
        // crossDomain: true,
        dataType: options.typeData,
        beforeSend: function(xhr) {
            let token = window.localStorage.getItem("token");

            if (!token && location.pathname !== '/login') {
                location.hash = '/login';
                return;
            }
            xhr.setRequestHeader("Authorization", "token "+token)
            if (options.contentType) {
                xhr.setRequestHeader("Content-Type", options.contentType);
            }
        },
        success: function(data) {
            if (typeof data.Code === 'undefined') {
                options.callback(data);
            }else if (data.Code == 0) {
                options.callback(data);
            } else {
                alert(data.Msg);
            }
        },
        error: function(xhr, status) {
            if (status === 'timeout') {
                alert("服务器响应超时！");
            } else if (xhr.status === 401) {
                location.hash = '/login';
                return;
            } else if (xhr.status > 0) {
                alert(xhr.responseText);
                return;
            }
            alert('请求“' + options.url + '”服务器没有响应！');
        },
        complete: function() {
            //结束进度条
            options.loadDone();
        }
    });
}

export default class Request {
    constructor() {

    }

    get(options) {
        request('get', options);
    }

    post(options) {
        request('post', options);
    }

    put(options) {
        request('put', options);
    }

    delete(options) {
        request('delete', options);
    }
}
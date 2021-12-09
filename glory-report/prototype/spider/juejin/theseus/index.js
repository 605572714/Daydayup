let url = "https://api.juejin.cn/content_api/v1/article/query_list?aid=2608&uuid=6992763314507023907"
// 3218998467499879
// {"user_id":"3218998467499879","sort_type":2,"cursor":"0"}

// POST /content_api/v1/article/query_list?aid=2608&uuid=6992763314507023907 HTTP/2
// Host: api.juejin.cn
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:94.0) Gecko/20100101 Firefox/94.0
// Accept: */*
// Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2
// Accept-Encoding: gzip, deflate, br
// Referer: https://juejin.cn/
// Content-Type: application/json
// Origin: https://juejin.cn
// Content-Length: 57
// Connection: keep-alive
// Cookie: MONITOR_WEB_ID=34285d9c-a794-44df-b097-e6f64861c563; _ga=GA1.2.1244033784.1628129587; sid_guard=06b4aec8ed754dc0d58c8d68ed169f4e%7C1634265496%7C5184000%7CTue%2C+14-Dec-2021+02%3A38%3A16+GMT; n_mh=TWu0QNJmk8VRKjk249Q94lBDbKbsHo4WqPqEIX9xI5Y; _tea_utm_cache_2608={%22utm_source%22:%22webbanner%22%2C%22utm_medium%22:%22banner%22%2C%22utm_campaign%22:%22nzzj_yq_2021%22}; passport_csrf_token_default=b80ddb36223da41cafb66dc053c2af31; passport_csrf_token=b80ddb36223da41cafb66dc053c2af31; uid_tt=cc2365e9d7c552c293c2dd4596e3aa06; uid_tt_ss=cc2365e9d7c552c293c2dd4596e3aa06; sid_tt=06b4aec8ed754dc0d58c8d68ed169f4e; sessionid=06b4aec8ed754dc0d58c8d68ed169f4e; sessionid_ss=06b4aec8ed754dc0d58c8d68ed169f4e; sid_ucp_v1=1.0.0-KGIxZTBiZjAzN2YyOGE2MDc3NTJmNmU1NTA5NWQ4NTQ4NmE4NmQ2ZjYKFwjnrsDhl_XbBRCY06OLBhiwFDgCQPEHGgJsZiIgMDZiNGFlYzhlZDc1NGRjMGQ1OGM4ZDY4ZWQxNjlmNGU; ssid_ucp_v1=1.0.0-KGIxZTBiZjAzN2YyOGE2MDc3NTJmNmU1NTA5NWQ4NTQ4NmE4NmQ2ZjYKFwjnrsDhl_XbBRCY06OLBhiwFDgCQPEHGgJsZiIgMDZiNGFlYzhlZDc1NGRjMGQ1OGM4ZDY4ZWQxNjlmNGU; _gid=GA1.2.795738631.1638753697
// Sec-Fetch-Dest: empty
// Sec-Fetch-Mode: cors
// Sec-Fetch-Site: same-site
// TE: trailers
const request = require("request");
const zlib = require('zlib');
let list = []
let data = {
  "user_id": "545787328857112",
  "sort_type": 2,
  "cursor": "0"
}
function getRequest (url) {
  request({
    url,
    method: "POST",
    headers: { //设置请求头
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:94.0) Gecko/20100101 Firefox/94.0",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  },
    (error, response, body) => {
      console.log(response.statusCode);
      if (!error && response.statusCode == 200) {
        body = JSON.parse(body)
        console.log(body);
        // data.cursor = body.cursor;
        // for (let i = 0; i < array.length; i++) {
        //   const element = array[i];

        // }
        // if (body.)
      }
    }

  );
}
getRequest(url)

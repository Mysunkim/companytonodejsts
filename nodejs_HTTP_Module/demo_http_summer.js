//모듈 가져오기
var http = require('http');//=> http: Node.js의 HTTP 모듈을 사용하기 위해 가져옵니다.
var url = require('url');//=> url: URL을 파싱하기 위한 모듈을 가져옵니다.

//서버 생성 및 요청 처리
//=>createServer 함수를 사용하여 HTTP 서버를 생성합니다. 
//이 함수는 요청(request)이 발생할 때마다 호출되는 콜백 함수를 인자로 받습니다.
http.createServer(function (req, res) {

  //응답 헤더 설정
  res.writeHead(200, {'Content-Type': 'text/html'});

  //URL 파싱 및 응답 작성
  var url_parts = url.parse(req.url, true); //=>함수를 사용하여 요청의 URL을 파싱합니다
  res.write("Path: " + url_parts.pathname);//=>URL의 경로 부분을 나타냅니다

  // localhost:8080/summer 에서 'summer' 값을 출력하도록 수정
  if(url_parts.pathname === '/summer') {
      res.write("\nParameter: " + url_parts.query.summer);
    }
  
    
  res.end();
}).listen(8080);//=>listen 함수를 사용하여 서버를 특정 포트(여기서는 8080)에서 실행합니다

//http://localhost:8080/summer?summer=summer -> url_parts.pathnameが画面に表示される。
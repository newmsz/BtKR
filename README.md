# BtKR
1바이트 256개의 경우의 수를 한글 1글자로 나타내서 디버그할때 바이트 배열을 쉽게 읽을 수 있게합니다

## 사용법
```
var buf = new Buffer(20);
for(var i=0; i<buf.length; i++) {
    buf.writeUInt8(parseInt(Math.random()*256), i);
}
console.log(BtKR.bytesToKoreanReadable(buf));

// 출력: 금3솟곳른믇룻N논D숙미늠갓디몯머못싯놈
```

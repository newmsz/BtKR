var BtKR = (function () {
    var cho = [0, 2, 3, 5, 6, 9];
    var jung = [0, 4, 8, 13, 18, 20];
    var jong = [0, 1, 4, 7, 16, 19];
    var kor_maxlen = cho.length*jung.length*jong.length;
    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?%@';

    function bytesToKoreanReadable(buf) {
        var res = [];

        for(var i=0; i<buf.length; i++) {
            var byte = buf[i];

            if(byte < kor_maxlen) {
                var ch = byte%cho.length;
                var ju = ((byte-ch)/cho.length)%jung.length;
                var jo = (((byte-ch)/cho.length)-ju)/jung.length%jong.length;
                var code = 0xAC00 + ((cho[ch]*21 + jung[ju]) * 28) + jong[jo];

                res.push(String.fromCharCode(code))
            } else
                res.push(alpha[byte-kor_maxlen])
        }

        return res.join('');
    }

    return {
        bytesToKoreanReadable: bytesToKoreanReadable
    };
})();

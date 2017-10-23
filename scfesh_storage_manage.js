// お気に入りフレーズ登録用ローカルストレージ
// 容量制限を考え、50フレーズまで登録可とする
// key: ID, value: フレーズ日英
// Twitter: @Ringtonix

// ローカルストレージ使えるならGO！
if(window.localStorage){
    var phraseStorage = window.localStorage;
    var phraseAmount = phraseStorage.length;

    var value = [phraseAmount, 'TestData'];
    JSON.stringify(value);
    console.log(phraseStorage);

    function setphrase() {
        phraseStorage.setItem(phraseAmount, value);
    }
    function getphrase() {
        phraseStorage.getItem(phraseAmount);
    }
    function remphrase() {

    }
}

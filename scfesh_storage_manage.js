// お気に入りフレーズ登録用ローカルストレージ
// 容量制限を考え、50フレーズまで登録可とする
// key: ID, value: フレーズ日英
// Twitter: @Ringtonix

// ローカルストレージ使えるならGO！
if(window.localStorage){
    var fraseStorage = window.localStorage;
    console.log("Frases: " + fraseStorage.length);
}

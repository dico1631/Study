let answer = Math.floor(Math.random() * 100) + 1;
let inputNum = -1;
let idx = 0

while(inputNum != answer){
    inputNum = prompt("�絵��! 1~100 ������ ���ڸ� �Է����ּ���.(exit�� �Է��Ͻø� ������ �� �ֽ��ϴ�.)");
    idx++;
    if(inputNum == "exit" || inputNum == answer){
        alert(`�����Դϴ�! �Է��Ͻ� ���ڴ� ${answer}�Դϴ�! ����Ƚ��: ${idx}��`);
        break;
    }else if(inputNum > answer){console.log("�ٿ�")}
    else{console.log("��")}
}

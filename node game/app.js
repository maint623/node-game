const readline = require("readline");
const process = require('process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
  }

onoff = "off"
gamemode = "no"
console.log("게임모드(게임의 이름을 입력해 선택하세요)")
console.log("1.updown  2.연산")
process.title = "| 게임목록 | 메인메뉴를 입력하면 메인메뉴로 돌아갑니다 |";

function updown(line){ 
    var line = Number(line)
    process.title = "| up down game | 총 시도횟수 : " + num + " | 메인메뉴를 입력하면 메인메뉴로 돌아갑니다 |";
    if(number < line){
        console.log("down")
    }
    if(number > line){
        console.log("up")
    }
    if(number == line){
        console.log("정답")
        console.log("| 총 시도횟수 : " + num + " |")
        onoff = "off"
        gamemode = "no"
        console.log("메인으로 가려면 아무키를 누르세요")
    }
    num++;
}

function yansan_더하기(line){ 
    var line = Number(line)
    process.title = "| 연산-더하기 | 총 성공횟수 : " + num + " | 메인메뉴를 입력하면 메인메뉴로 돌아갑니다 |";
    if(value == line){
        console.log("정답")
        number = Math.floor(Math.random() * 10) + 1;
        number2 = Math.floor(Math.random() * 10) + 1;
        if(pmgn = 1){
            value = number + number2
            console.log(`${number} + ${number2}`)
        }
        num++;
    }else{
        console.log("틀렸습니다")
        console.log("| 총 성공횟수 : " + num + " |")
        onoff = "off"
        gamemode = "no"
        console.log("메인으로 가려면 아무키를 누르세요")
    }
    
}

function yansan_빼기(line){ 
    var line = Number(line)
    process.title = "| 연산-빼기 | 총 성공횟수 : " + num + " | 메인메뉴를 입력하면 메인메뉴로 돌아갑니다 |";
    if(value == line){
        console.log("정답")
        number = Math.floor(Math.random() * 10) + 1;
        number2 = Math.floor(Math.random() * 10) + 1;
        if(pmgn = 1){
            value = number - number2
            console.log(`${number} - ${number2}`)
        }
        num++;
    }else{
        console.log("틀렸습니다")
        console.log("| 총 성공횟수 : " + num + " |")
        onoff = "off"
        gamemode = "no"
        console.log("메인으로 가려면 아무키를 누르세요")
    }
    
}

function yansan_곱하기(line){ 
    var line = Number(line)
    process.title = "| 연산-곱하기 | 총 성공횟수 : " + num + " | 메인메뉴를 입력하면 메인메뉴로 돌아갑니다 |";
    if(value == line){
        console.log("정답")
        number = Math.floor(Math.random() * 10) + 1;
        number2 = Math.floor(Math.random() * 10) + 1;
        if(pmgn = 1){
            value = number * number2
            console.log(`${number} * ${number2}`)
        }
        num++;
    }else{
        console.log("틀렸습니다")
        console.log("| 총 성공횟수 : " + num + " |")
        onoff = "off"
        gamemode = "no"
        console.log("메인으로 가려면 아무키를 누르세요")
    }
    
}
rl.on("line", (line) => {
    //if(line=="") return;
    if(line == "updown"){
        gamemode = "updown"
        number = Math.floor(Math.random() * 100) + 1;
        onoff = "on"
        num = 0
        console.clear()
        console.log("수를 입력하세요")
        return;
    }

    if(gamemode == "no"){
        console.clear()
        process.title = "| 게임목록 | 메인메뉴를 입력하면 메인메뉴로 돌아갑니다 |";
        console.log("게임모드(게임의 이름을 입력해 선택하세요)")
        console.log("1.updown  2.연산")
    }

    if(gamemode == "updown"){
        updown(line)
    }

    if(line == "연산"){
        console.clear()
        process.title = "| 게임모드 | 메인메뉴를 입력하면 메인메뉴로 돌아갑니다 |";
        console.log("게임모드(게임의 이름을 입력해 선택하세요)")
        console.log("1.더하기  2.빼기  3.곱하기")
        gamemode = "yansan"
    }

    if(gamemode == "yansan"){
        if(line == "더하기"){
            gamemode = "yansan-더하기"
            console.clear()
            onoff = "on"
            num = 1
            number = Math.floor(Math.random() * 10) + 1;
            number2 = Math.floor(Math.random() * 10) + 1;
            if(pmgn = 1){
                value = number + number2
                console.log(`${number} + ${number2}`)
            }
        return;
        }
        if(line == "빼기"){
            gamemode = "yansan-빼기"
            console.clear()
            onoff = "on"
            num = 1
            number = Math.floor(Math.random() * 10) + 1;
            number2 = Math.floor(Math.random() * 10) + 1;
            if(pmgn = 1){
                value = number - number2
                console.log(`${number} - ${number2}`)
            }
        return;
        }
        if(line == "곱하기"){
            gamemode = "yansan-곱하기"
            console.clear()
            onoff = "on"
            num = 1
            number = Math.floor(Math.random() * 10) + 1;
            number2 = Math.floor(Math.random() * 10) + 1;
            if(pmgn = 1){
                value = number * number2
                console.log(`${number} * ${number2}`)
            }
        return;
        }
    }

    if(gamemode == "yansan-더하기"){
        yansan_더하기(line)
    }

    if(gamemode == "yansan-빼기"){
        yansan_빼기(line)
    }

    if(gamemode == "yansan-곱하기"){
        yansan_곱하기(line)
    }

    if(line == "메인메뉴"){
        onoff = "off"
        gamemode = "no"
        console.clear()
        process.title = "| 게임목록 | 메인메뉴를 입력하면 메인메뉴로 돌아갑니다 |";
        console.log("게임모드(게임의 이름을 입력해 선택하세요)")
        console.log("1.updown  2.연산")
    }
});
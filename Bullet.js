//총알을 정의한다..
class Bullet extends GameObject{

    //총알이 한 발자국씩 앞으로 전진할때마다, 게임에 남아있는 
    //적군들에 대해 충돌체크를 해본다...
    //충돌이라면?  나(나인 총알)죽고 너(적군)죽고...
    //원래는 부모님껏을 그냥 써도 되지만, 현재 총알 입장에서는
    //부모가 물려준 tick() 메서드는 충돌체크 로직이 없으므로, 
    //부모것을 업그레이드할 필요가 있다..이러한 메서드 정의 기법
    //을 OOP 에서는 오버라이딩(Overriding)이라 한다..
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;

        //충돌체크 
        for(let i=0;i<enemyArray.length;i++){
            let result=collisionCheck(this , enemyArray[i]);
            if(result){//충돌했다면...
                console.log(i, "번째 적군과 충돌햇어요");
                break;
            }
        }
    }
}
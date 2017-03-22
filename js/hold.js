



   
  
    
    
    
    

//A's Bellow
    if ((stats.a > 0) && (stats.a < 10)) {
        
        // check range of a 
        
        
        // switch case over the rectangles that are draw
        
        
        
        
        
        
        
        
          ctx.beginPath();
          ctx.arc(288, 75, 70, 0, Math.PI, false);
          ctx.closePath();
          ctx.lineWidth = 5;
          ctx.fillStyle = '#550000';
          ctx.fill();
          
            console.log("A1 hit");
        } else if ((stats.a > 11) && (stats.a < 20)) {
            ctx.fillStyle = "#925060", ctx.fillRect(40, 60, 50, 90);
            console.log("A2 hit");
        } else if ((stats.a > 21) && (stats.a < 30)) {
            ctx.fillStyle = "#66ffcc", ctx.fillRect(10, 80, 30, 190);
            console.log("A3 hit");
        }  else if ((stats.a > 31) && (stats.a < 40)) {
            ctx.fillStyle = "#FFFF00", ctx.fillRect(10, 80, 30, 190);
            console.log("A4 hit");
        }
    
//B's Bellow
    if ((stats.b > 0) && (stats.b < 10)) {
           
      var rectWidth = 300;
      var rectHeight = 400;

      // translate context to center of canvas
      ctx.translate(myCanvas.width / 2, myCanvas.height / 2);

      // rotate 45 degrees clockwise
      ctx.rotate(Math.PI / 4);

      ctx.fillStyle = '#D8644B';
      ctx.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight);              

            console.log("B1 hit");
        } else if ((stats.b > 11) && (stats.b < 20)) {
            ctx.fillStyle = "#27AE60", ctx.fillRect(750, 60, 50, 30);
            console.log("B2 hit");
        } else if ((stats.b > 21) && (stats.b < 30)) {
            ctx.fillStyle = "##B9770E", ctx.fillRect(40, 80, 330, 690);
            console.log("B3 hit");
        }  else if ((stats.b > 31) && (stats.b < 40)) {
            ctx.fillStyle = "##EB984E", ctx.fillRect(90, 0, 30, 190);
            console.log("B4 hit");
        }
    
//C's Bellow
    if ((stats.c > 0) && (stats.c < 10)) {
          ctx.beginPath();
          ctx.arc(50, 20, 50, 0, 2 * Math.PI, false);
          ctx.fillStyle = '#A367B1';
          ctx.fill();
         
            console.log("C1 hit");
        } else if ((stats.c > 11) && (stats.c < 20)) {
            ctx.fillStyle = "##641E16", ctx.fillRect(50, 160, 650, 830);
            console.log("C2 hit");
        } else if ((stats.c > 21) && (stats.c < 30)) {
            ctx.fillStyle = "#CA6F1E", ctx.fillRect(840, 680, 30, 390);
            console.log("C3 hit");
        }  else if ((stats.c > 31) && (stats.c < 40)) {
            ctx.fillStyle = "#8E44AD", ctx.fillRect(890, 900, 130, 90);
            console.log("C4 hit");
        }
    
//D's Bellow
    if ((stats.d > 0) && (stats.d < 10)) {
            ctx.fillStyle = "#800000", ctx.fillRect(620, 2, 1150, 130);
            console.log("D1 hit");
        } else if ((stats.d > 11) && (stats.d < 20)) {
            ctx.fillStyle = "#925060", ctx.fillRect(640, 360, 850, 990);
            console.log("D2 hit");
        } else if ((stats.d > 21) && (stats.d < 30)) {
            ctx.fillStyle = "#FFFF00", ctx.fillRect(130, 780, 630, 590);
            console.log("D3 hit");
        }  else if ((stats.d > 31) && (stats.d < 40)) {
            ctx.fillStyle = "#ff6666", ctx.fillRect(710, 380, 230, 790);
            console.log("D4 hit");
        }
    
//E's Bellow
    if ((stats.e > 0) && (stats.e < 10)) {
            ctx.fillStyle = "##ccff99", ctx.fillRect(230, 460, 670, 4560);
            console.log("E1 hit");
        } else if ((stats.e > 11) && (stats.e < 20)) {
            ctx.fillStyle = "#27AE60", ctx.fillRect(650, 460, 550, 830);
            console.log("E2 hit");
        } else if ((stats.e > 21) && (stats.e < 30)) {
            ctx.fillStyle = "##B9770E", ctx.fillRect(340, 680, 330, 690);
            console.log("E3 hit");
        }  else if ((stats.e > 31) && (stats.e < 40)) {
            ctx.fillStyle = "##EB984E", ctx.fillRect(90, 0, 30, 190);
            console.log("E4 hit");
        }
    
//F's Bellow
    if ((stats.f > 0) && (stats.f < 10)) {
            ctx.fillStyle = "#45B39D  ", ctx.fillRect(120, 130, 320, 140);
            console.log("F1 hit");
        } else if ((stats.f > 11) && (stats.f < 20)) {
            ctx.fillStyle = "##641E16", ctx.fillRect(50, 160, 650, 830);
            console.log("F2 hit");
        } else if ((stats.f > 21) && (stats.f < 30)) {
            ctx.fillStyle = "###CA6F1E", ctx.fillRect(840, 680, 30, 390);
            console.log("F3 hit");
        }  else if ((stats.f > 31) && (stats.f < 40)) {
            ctx.fillStyle = "#8E44AD", ctx.fillRect(890, 900, 130, 90);
            console.log("F4 hit");
        } 
    
//G's Bellow
    if ((stats.g > 0) && (stats.g < 10)) {
            ctx.fillStyle = "#800000", ctx.fillRect(230, 245, 550, 300);
            console.log("G1 hit");
        } else if ((stats.g > 11) && (stats.g < 20)) {
            ctx.fillStyle = "#925060", ctx.fillRect(420, 660, 550, 967);
            console.log("G2 hit");
        } else if ((stats.g > 21) && (stats.g < 30)) {
            ctx.fillStyle = "#FFFF00", ctx.fillRect(10, 840, 330, 194);
            console.log("G3 hit");
        }  else if ((stats.g > 31) && (stats.g < 40)) {
            ctx.fillStyle = "#FFFF00", ctx.fillRect(210, 830, 350, 180);
            console.log("G4 hit");
        }
    
//H's Bellow
    if ((stats.h > 0) && (stats.h < 10)) {
            ctx.fillStyle = "#212F3D", ctx.fillRect(120, 630, 140, 480);
            console.log("H1 hit");
        } else if ((stats.h > 11) && (stats.h < 20)) {
            ctx.fillStyle = "#27AE60", ctx.fillRect(550, 260, 520, 430);
            console.log("H2 hit");
        } else if ((stats.h > 21) && (stats.h < 30)) {
            ctx.fillStyle = "##B9770E", ctx.fillRect(430, 280, 730, 590);
            console.log("H3 hit");
        }  else if ((stats.h > 31) && (stats.h < 40)) {
            ctx.fillStyle = "##EB984E", ctx.fillRect(920, 430, 330, 390);
            console.log("H4 hit");
        }
    
//I's Bellow
    if ((stats.i > 0) && (stats.i < 10)) {
            ctx.fillStyle = "#45B39D  ", ctx.fillRect(1120, 167, 420, 440);
            console.log("I1 hit");
        } else if ((stats.i > 11) && (stats.i < 20)) {
            ctx.fillStyle = "##641E16", ctx.fillRect(50, 160, 650, 830);
            console.log("I2 hit");
        } else if ((stats.i > 21) && (stats.i < 30)) {
            ctx.fillStyle = "###CA6F1E", ctx.fillRect(840, 680, 30, 390);
            console.log("I3 hit");
        }  else if ((stats.i > 31) && (stats.i < 40)) {
            ctx.fillStyle = "#8E44AD", ctx.fillRect(890, 900, 130, 90);
            console.log("I4 hit");
        }
    
//J's Bellow
    if ((stats.j > 0) && (stats.j < 10)) {
            ctx.fillStyle = "#800000", ctx.fillRect(20, 20, 150, 100);
            console.log("J1 hit");
        } else if ((stats.j > 11) && (stats.j < 20)) {
            ctx.fillStyle = "#925060", ctx.fillRect(40, 60, 50, 90);
            console.log("J2 hit");
        } else if ((stats.j > 21) && (stats.j < 30)) {
            ctx.fillStyle = "#FFFF00", ctx.fillRect(10, 80, 30, 190);
            console.log("J3 hit");
        }  else if ((stats.j > 31) && (stats.j < 40)) {
            ctx.fillStyle = "#FFFF00", ctx.fillRect(10, 80, 30, 190);
            console.log("J4 hit");
        }
    
//K's Bellow
    if ((stats.k > 0) && (stats.k < 10)) {
            ctx.fillStyle = "#212F3D", ctx.fillRect(20, 60, 120, 400);
        console.log("K1 hit");
        } else if ((stats.k > 11) && (stats.k < 20)) {
            ctx.fillStyle = "#27AE60", ctx.fillRect(750, 60, 50, 30);
            console.log("K2 hit");
        } else if ((stats.k > 21) && (stats.k < 30)) {
            ctx.fillStyle = "##B9770E", ctx.fillRect(40, 80, 330, 690);
            console.log("K3 hit");
        }  else if ((stats.k > 31) && (stats.k < 40)) {
            ctx.fillStyle = "##EB984E", ctx.fillRect(90, 0, 30, 190);
            console.log("K4 hit");
        }
    
//L's Bellow
    if ((stats.l > 0) && (stats.l < 10)) {
            ctx.fillStyle = "#45B39D  ", ctx.fillRect(120, 160, 20, 40);
            console.log("L1 hit");
        } else if ((stats.l > 11) && (stats.l < 20)) {
            ctx.fillStyle = "##641E16", ctx.fillRect(50, 160, 650, 830);
            console.log("L2 hit");
        } else if ((stats.l > 21) && (stats.l < 30)) {
            ctx.fillStyle = "###CA6F1E", ctx.fillRect(840, 680, 30, 390);
            console.log("L3 hit");
        }  else if ((stats.l > 31) && (stats.l < 40)) {
            ctx.fillStyle = "#8E44AD", ctx.fillRect(890, 900, 130, 90);
            console.log("L4 hit");
        }  
    
//M's Bellow
    if ((stats.m > 0) && (stats.m < 10)) {
            ctx.fillStyle = "#800000", ctx.fillRect(240, 210, 50, 10);
            console.log("M1 hit");
        } else if ((stats.m > 11) && (stats.m < 20)) {
            ctx.fillStyle = "#925060", ctx.fillRect(440, 360, 250, 950);
            console.log("M2 hit");
        } else if ((stats.m > 21) && (stats.m < 30)) {
            ctx.fillStyle = "#FFFF00", ctx.fillRect(150, 180, 130, 1190);
            console.log("M2 hit");
        }  else if ((stats.m > 31) && (stats.m < 40)) {
            ctx.fillStyle = "#FFFF00", ctx.fillRect(130, 830, 930, 290);
            console.log("M2 hit");
        }
    
//N's Bellow
    if ((stats.n > 0) && (stats.n < 10)) {
            ctx.fillStyle = "#212F3D", ctx.fillRect(240, 260, 1120, 420);
            console.log("N1 hit");
        } else if ((stats.n > 11) && (stats.n < 20)) {
            ctx.fillStyle = "#27AE60", ctx.fillRect(750, 60, 50, 30);
            console.log("N2 hit");
        } else if ((stats.n > 21) && (stats.n < 30)) {
            ctx.fillStyle = "##B9770E", ctx.fillRect(340, 810, 330, 690);
            console.log("N3 hit");
        }  else if ((stats.n > 31) && (stats.n < 40)) {
            ctx.fillStyle = "##EB984E", ctx.fillRect(190, 320, 130, 690);
            console.log("N4 hit");
        }
    
//O's Bellow
    if ((stats.o > 0) && (stats.c < 10)) {
            ctx.fillStyle = "#45B39D  ", ctx.fillRect(520, 260, 210, 430);
            console.log("01 hit");
        } else if ((stats.o > 11) && (stats.o < 20)) {
            ctx.fillStyle = "#ccff99", ctx.fillRect(50, 760, 50, 630);
            console.log("02 hit");
        } else if ((stats.o > 21) && (stats.o < 30)) {
            ctx.fillStyle = "###CA6F1E", ctx.fillRect(40, 680, 30, 390);
            console.log("03 hit");
        }  else if ((stats.o > 31) && (stats.o < 40)) {
            ctx.fillStyle = "#8E44AD", ctx.fillRect(90, 1000, 630, 10);
            console.log("04 hit");
        }
    
//P's Bellow
    if ((stats.p > 0) && (stats.p < 10)) {
            ctx.fillStyle = "#800000", ctx.fillRect(600, 423, 650, 330);
            console.log("P1 hit");
        } else if ((stats.d > 11) && (stats.d < 20)) {
            ctx.fillStyle = "#925060", ctx.fillRect(530, 460, 570, 290);
            console.log("P2 hit");
        } else if ((stats.d > 21) && (stats.d < 30)) {
            ctx.fillStyle = "#FFFF00", ctx.fillRect(130, 480, 430, 420);
            console.log("P3 hit");
        }  else if ((stats.d > 31) && (stats.d < 40)) {
            ctx.fillStyle = "#FFFF00", ctx.fillRect(310, 350, 230, 690);
            console.log("P4 hit");
        }
    
//Q's Bellow
    if ((stats.q > 0) && (stats.q < 10)) {
            ctx.fillStyle = "#212F3D", ctx.fillRect(730, 460, 660, 4560);
            console.log("Q1 hit");
        } else if ((stats.q > 11) && (stats.q < 20)) {
            ctx.fillStyle = "#27AE60", ctx.fillRect(350, 440, 550, 830);
            console.log("Q2 hit");
        } else if ((stats.q > 21) && (stats.q < 30)) {
            ctx.fillStyle = "##B9770E", ctx.fillRect(340, 630, 330, 690);
            console.log("Q3 hit");
        }  else if ((stats.q > 31) && (stats.q < 40)) {
            ctx.fillStyle = "##EB984E", ctx.fillRect(590, 0, 30, 1690);
            console.log("Q4 hit");
        }
    
//R's Bellow
    if ((stats.r > 0) && (stats.r < 10)) {
            ctx.fillStyle = "#45B39D  ", ctx.fillRect(1210, 130, 320, 1140);
        console.log("R1 hit");
        } else if ((stats.r > 11) && (stats.r < 20)) {
            ctx.fillStyle = "##641E16", ctx.fillRect(150, 170, 650, 630);
            console.log("R2 hit");
        } else if ((stats.r > 21) && (stats.r < 30)) {
            ctx.fillStyle = "###CA6F1E", ctx.fillRect(860, 580, 20, 390);
            console.log("R3 hit");
        }  else if ((stats.r > 31) && (stats.r < 40)) {
            ctx.fillStyle = "#8E44AD", ctx.fillRect(290, 940, 130, 902);
            console.log("R4 hit");
        } 
    
//S's Bellow
    if ((stats.s > 0) && (stats.s < 10)) {
            ctx.fillStyle = "#ccff99", ctx.fillRect(220, 255, 540, 320);
            console.log("S1 hit");
        } else if ((stats.s > 11) && (stats.s < 20)) {
            ctx.fillStyle = "#925060", ctx.fillRect(420, 620, 540, 965);
            console.log("S2 hit");
        } else if ((stats.s > 21) && (stats.s < 30)) {
            ctx.fillStyle = "#ccff99", ctx.fillRect(10, 840, 330, 1194);
            console.log("S3 hit");
        }  else if ((stats.s > 31) && (stats.s < 40)) {
            ctx.fillStyle = "#FFFF00", ctx.fillRect(410, 530, 750, 380);
            console.log("S4 hit");
        }
    
//T's Bellow
    if ((stats.t > 0) && (stats.t < 10)) {
            ctx.fillStyle = "#212F3D", ctx.fillRect(720, 430, 350, 680);
            console.log("T1 hit");
        } else if ((stats.t > 11) && (stats.t < 20)) {
            ctx.fillStyle = "#27AE60", ctx.fillRect(350, 860, 380, 430);
            console.log("T2 hit");
        } else if ((stats.t > 21) && (stats.t < 30)) {
            ctx.fillStyle = "#B9770E", ctx.fillRect(530, 280, 730, 590);
            console.log("T3 hit");
        }  else if ((stats.t > 31) && (stats.t < 40)) {
            ctx.fillStyle = "#EB984E", ctx.fillRect(420, 930, 830, 990);
            console.log("T4 hit");
        }
    
//U's Bellow
    if ((stats.u > 0) && (stats.u < 10)) {
            ctx.fillStyle = "#45B39D", ctx.fillRect(620, 567, 1020, 1040);
        } else if ((stats.u > 11) && (stats.u < 20)) {
            ctx.fillStyle = "##641E16", ctx.fillRect(550, 660, 1150, 330);
        } else if ((stats.u > 21) && (stats.u < 30)) {
            ctx.fillStyle = "#CA6F1E", ctx.fillRect(340, 1180, 330, 90);
        }  else if ((stats.u > 31) && (stats.u < 40)) {
            ctx.fillStyle = "#8E44AD", ctx.fillRect(490, 500, 430, 390);
        }
    
//V's Bellow
    if ((stats.v > 0) && (stats.v < 10)) {
            ctx.fillStyle = "#df1616", ctx.fillRect(220, 220, 350, 400);
            console.log("V1 hit");
        } else if ((stats.v > 11) && (stats.v < 20)) {
            ctx.fillStyle = "#925060", ctx.fillRect(340, 360, 350, 390);
            console.log("V2 hit");
        } else if ((stats.v > 21) && (stats.v < 30)) {
            ctx.fillStyle = "#6ACA35", ctx.fillRect(410, 480, 430, 490);
            console.log("V3 hit");
        }  else if ((stats.v > 31) && (stats.v < 40)) {
            ctx.fillStyle = "#FFFF00", ctx.fillRect(410, 480, 430, 590);
            console.log("V4 hit");
        }
    
//W's Bellow
    if ((stats.w > 0) && (stats.w < 10)) {
            ctx.fillStyle = "#212F3D", ctx.fillRect(720, 700, 820, 1100);
            console.log("W1 hit");
        } else if ((stats.w > 11) && (stats.w < 20)) {
            ctx.fillStyle = "#27AE60", ctx.fillRect(50, 760, 570, 730);
            console.log("W2 hit");
        } else if ((stats.w > 21) && (stats.w < 30)) {
            ctx.fillStyle = "#B9770E", ctx.fillRect(740, 780, 1030, 90);
            console.log("W3 hit");
        }  else if ((stats.w > 31) && (stats.w < 40)) {
            ctx.fillStyle = "#7d6677", ctx.fillRect(790, 700, 730, 590);
            console.log("W4 hit");
        }
    
//X's Bellow
    if ((stats.x > 0) && (stats.x < 10)) {
            ctx.fillStyle = "#45B39D  ", ctx.fillRect(420, 140, 243, 440);
            console.log("X1 hit");
        } else if ((stats.x > 11) && (stats.x < 20)) {
            ctx.fillStyle = "#641E16", ctx.fillRect(50, 460, 550, 530);
            console.log("X2 hit");
        } else if ((stats.x > 21) && (stats.x < 30)) {
            ctx.fillStyle = "#fafc93", ctx.fillRect(840, 680, 30, 390);
            console.log("X3 hit");
        }  else if ((stats.x > 31) && (stats.x < 40)) {
            ctx.fillStyle = "#7d92da", ctx.fillRect(890, 900, 130, 90);
            console.log("X4 hit");
        }   
    
//Y's Bellow
    if ((stats.y > 0) && (stats.y < 10)) {
            ctx.fillStyle = "#212F3D", ctx.fillRect(20, 60, 120, 400);
            console.log("Y1 hit");
        } else if ((stats.y > 11) && (stats.y < 20)) {
            ctx.fillStyle = "#27AE60", ctx.fillRect(750, 60, 50, 30);
            console.log("Y2 hit");
        } else if ((stats.y > 21) && (stats.y < 30)) {
            ctx.fillStyle = "#fbf5f4", ctx.fillRect(40, 80, 330, 690);
            console.log("Y3 hit");
        }  else if ((stats.y > 31) && (stats.y < 40)) {
            ctx.fillStyle = "#b7c888", ctx.fillRect(90, 0, 30, 190);
            console.log("Y4 hit");
        }
    
//Z's Bellow
    if ((stats.z > 0) && (stats.z < 10)) {
            ctx.fillStyle = "#ebcecb", ctx.fillRect(120, 160, 20, 40);
            console.log("Z1 hit");
        } else if ((stats.z > 11) && (stats.z < 20)) {
            ctx.fillStyle = "#B27062", ctx.fillRect(50, 160, 650, 830);
            console.log("Z2 hit");
        } else if ((stats.z > 21) && (stats.z < 30)) {
            ctx.fillStyle = "#2f0088", ctx.fillRect(840, 680, 30, 390);
            console.log("Z3 hit");
        }  else if ((stats.z > 31) && (stats.z < 40)) {
            ctx.fillStyle = "#6500d8", ctx.fillRect(890, 900, 130, 90);
            console.log("Z4 hit");
            
        }     
    
    


console.log(stats);
    
}
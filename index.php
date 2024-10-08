<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jpyen | Index</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="css/indexstyles.css">
</head>

<body id="page" onload="time24(); sundial();">
    <div class="world"></div>
    <div>
        
        <div class="floor"></div>
        <span class="time" id="time"></span>

        <span class="bulb" onclick="light()"></span>
        <span class="lamp" onclick="light()"></span>

        <span class="desk">
            <!-- <span class="bench"></span> -->
            <!-- <span class="legleft"></span> -->
            <span class="legright"></span>
        </span>
        
        
        
        <span class="monitor" id="screentime">
            <span class="power"></span>
            <span class="stand"></span>
            <span class="keeb"></span>
            <span class="mouse"></span>
            <span class="screen"><a href="home.php">ITP</a></span>
        </span>
        
        <span class="cart">
            <span class="chassis">
            <span class="rack"></span>
            <!-- <?php include './include/loaners.php';?> -->
            <span class="cartTable"></span>
            <!-- <span class="doorLeft"></span>
            <span class="doorRight"></span> -->
            <!-- Require hover pivot element -->
            
            <!-- Require 3 wheels<span class="doorLeft"></span> -->
        </span>

        
        <!-- <span class="bedframe">
            <span class="futon">
                <a href="https://github.iu.edu/info-capstone-2023/jpyen">GitHub!</a>
                <span class="pillow"></span>
                <span class="cover"></span>
            </span>
        </span> -->

        <!-- <element class="books"><ul>
            <element class="book"><li style="--z:5;"><a href="https://github.iu.edu/info-capstone-2023/jpyen/tree/ITP-01">ITP-01</a></li></element>
            <element class="book"><li style="--z:4;"><a href="https://github.iu.edu/info-capstone-2023/jpyen/tree/ITP-02">ITP-02</a></li></element>
            <element class="book"><li style="--z:3;"><a href="https://github.iu.edu/info-capstone-2023/jpyen/tree/ITP-03">ITP-03</a></li></element>
            <element class="book"><li style="--z:2;"><a href="https://github.iu.edu/info-capstone-2023/jpyen/tree/ITP-04">ITP-04</a></li></element>
            <element class="book"><li style="--z:1;"><a href="https://github.iu.edu/info-capstone-2023/jpyen/tree/ITP-05">ITP-05</a></li></element>
        </ul></element> -->
        
    </div>

    <script src="js/time.js"></script>

</body>
</html>
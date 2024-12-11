//onmousemove = function (e) {
//    console.log("mouse location:", e.clientX)
//
//    console.log()
//
//    if (e.clientX == $(window).width() / 2) {
//        $(".hero").css({
//            fontVariationSettings: "'wdth'" + 50
//        })
//    } else if (e.clientX > $(window).width() / 2) {
//        $(".hero").css({
//            fontVariationSettings: "'wdth'" + 150
//        })
//    }
//
//    //      $(".hero").css({
//    //        fontVariationSettings: "'wdth'" + e.clientX / 10
//    //    })
//
//}

for (let i = 0; i < 25; i++) {
    $("#sItem" + (i + 1)).css("z-index", i + 1);
}

let mCheck = false;
let moverX = -25;
let moverY = -5;
let mXOrginial = -25;
let mYOrginial = -5;

function setMoveValues() {
    if ((Math.random() * (2 - 1 + 1)) << 0 == 1) {
        moverX = -45;
        mXOrginial = -45;
    } else {
        moverX = 25;
        mXOrginial = 25;
    }

    if ((Math.random() * (2 - 1 + 1)) << 0 == 1) {
        moverY = -10;
        mYOrginial = -10;
    } else {
        moverY = 25;
        mYOrginial = 25;
    }
    execMove();
}

function execMove() {
    if (mCheck == false) {
        for (let i = 0; i < 25; i++) {
            $("#sItem" + (i + 1)).css({
                transition: "all 500ms",
                transform: "translate3D(" + moverX + "vw," + moverY + "vh, 0)"
            });

            if (i < 3) {
                if (moverX > 0) {
                    moverX = moverX - 0.5;
                } else {
                    moverX = moverX + 0.5;
                }

                if (moverY > 0) {
                    moverY = moverY - 0.25;
                } else {
                    moverY = moverY + 0.25;
                }
            } else {
                if (moverX > 0) {
                    moverX = moverX - 1;
                } else {
                    moverX = moverX + 1;
                }

                if (moverY > 0) {
                    moverY = moverY - 1;
                } else {
                    moverY = moverY + 0.1;
                }

                if (i > 23) {
                    moverY = 0;
                }
            }
        }
        mCheck = true;
        moverX = mXOrginial;
        moverY = mYOrginial;
    } else {
        console.log("mCheck = false");
        for (let i = 0; i < 25; i++) {
            $("#sItem" + (i + 1)).css({
                transition: "all 500ms",
                transform: "none"
            });

            mCheck = false;
        }
    }
}

let mobileCheck = false;

function checkMobile() {
    (function (a) {
        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                a.substr(0, 4)
            )
        )
            mobileCheck = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
}

checkMobile();
//
//if (mobileCheck == false) {
//    var scene1 = document.getElementById('scene');
//    var parallaxInstance1 = new Parallax(scene1, {
//    relativeInput: true,
//    precision: .1,
//    limitY: false,
//    limitX: false,
//    invertX: false,
//    invertY: false
//});
//
//} else {
//
//setMoveValues()
//
//setInterval(function () { setMoveValues() },2000)
//}

let is_running = false;

if (mobileCheck == false) {
    var scene1 = document.getElementById("scene");
    var parallaxInstance1 = new Parallax(scene1, {
        relativeInput: true,
        precision: 0.1,
        limitY: false,
        limitX: false,
        invertX: false,
        invertY: false
    });
} else {
    //    var scene1 = document.getElementById('scene');
    //    var parallaxInstance1 = new Parallax(scene1, {
    //    relativeInput: true,
    //    precision: .1,
    //    limitY: false,
    //    limitX: false,
    //    invertX: false,
    //    invertY: false
    //});

    $("#button").css("color", "red");

    $("#button").click(function (e) {
        /* DeviceOrientationEvent.requestPermission().then(() => {
            var scene = document.getElementById("scene");
            var parallaxInstance1 = new Parallax(scene1, {
                relativeInput: false,
                precision: 1,
                limitY: false,
                limitX: false,
                invertX: false,
                invertY: false
            });
        });*/

        var dot = $("#sItem25");
        var scene = document.getElementById("scene");
        if (typeof DeviceMotionEvent.requestPermission === "function") {
            document.addEventListener("click", () => {
                if (location.protocol != "https:") {
                    location.href = "https:" + window.location.href.substring(window.location.protocol.length);
                }
                DeviceMotionEvent.requestPermission()
                    .then((response) => {
                        if (response == "granted") {
                            window.addEventListener("devicemotion", (e) => {
                                dot.attr("data-depth", "1");

                                var parallaxInstance = new Parallax(scene, {
                                    relativeInput: false,
                                    precision: 0.1,
                                    limitY: false,
                                    limitX: false,
                                    invertX: false,
                                    invertY: false,
                                    calibrateY: false
                                });
                            });
                        }
                    })
                    .catch(console.error);
            });
        }
    });
}

let orientArr;

function handleOrientation(event) {
    const absolute = event.absolute;
    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;

    orientArr = [absolute, alpha, beta, gamma];

    $("#orientA").html(Math.round(orientArr[1]));
    $("#orientB").html(Math.round(orientArr[2]));
    $("#orientG").html(Math.round(orientArr[3]));
    // Do stuff with the new orientation data
}

window.addEventListener("deviceorientation", (event) => {
    console.log(`${event.alpha} : ${event.beta} : ${event.gamma}`);
});

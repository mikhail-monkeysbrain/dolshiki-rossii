<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("СОСТАВЛЕНИЕ ИСКА");
?>
    <section id="header">
        <h2 class="__tac">Взыскание неустойки с <br>
            “СПб-Реновации”  ЖК СТЕРИОС</h2>
        <button class="calculation">Рассчитать</button>
    </section>
    <section id="section1">
        <div class="container">
            <p class="multy">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<br> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
    </section>
    <section id="debt">
        <div class="debt">
            <div class="inner">
            <h3 class="__ttu __full">Узнайте сколько вам должен застройщик</h3>
                <div class="blcok">
                    <div class="__fouth">
                        <div class="block_calc">
                            <label class="calc_p" for="cena_dog">Стоимость объекта долевого строительства по договору </label><br>
                            <input type="text" placeholder="0.00" id="cena_dog" > <span class="calc_naim">руб.</span><br>
                        </div>
                        <div class="block_calc">
                            <label class="calc_p" for="date_per_dog">Дата передачи объекта долевого строительства <br> по договору</label><br>
                            <input id="date_per_dog"  type="text"  placeholder="01.01.2016" /><br>
                        </div>
                    </div>
                    <div class="__semi">
                <div class="block_calc">
                    <label class="calc_p" for="date_per">Дата передачи объекта: </label><br>
                    <input id="date_per"  type="text"  placeholder="01.01.2016"/><br>
                </div>
                <div class="checkbox">
                    <input id="check1" type="checkbox" name="check" value="check1">
                    <label class="check-box" for="check1">Квартира еще не передана</label>
                </div>
                <button onclick="yaCounter36945295.reachGoal('kalculator'); return true;" id="button" class="open_debt_result">Рассчитать</button>
            </div>
                </div>
            </div>
        </div>
        <div class="debt__after"></div>
        <div class="debt--result">
            <div class="container">
                <h3 class="calc_res __full">Результат:</h3>
                <div class="pr_summary">
                    <p class="string1"> </p>
                    <p class="kolDays1"> </p>
                    <p class="zDayp1"> </p>
                    <p class="zPeriodp1"> </p>
                    <p class="sht1"> </p>
                </div>
                <div class="pr_summary">
                    <p class="string2"></p>
                    <p class="kolDays2"></p>
                    <p class="zDayp2"></p>
                    <p class="zPeriodp2"></p>
                    <p class="sht2"></p>
                </div>
                <div class="pr_summary">
                    <p class="string3"></p>
                    <p class="kolDays3"></p>
                    <p class="zDayp3"></p>
                    <p class="zPeriodp3"></p>
                    <p class="sht3"></p>
                </div>
            </div>
            <div class="summary">
                <p class="string_obsh"></p>
                <p class="kolDays_obsh"></p>
                <p class="zPeriodp_obsh"></p>
                <br>
                <p class="sht_obsh"></p></div>

                <a id="clear">Сбросить</a>
            </div>
    </section>
    <section id="form">
        <form class="sender">
            <h3 class="calc_res __full">Оставьте заявку, чтобы узнать, как вернуть свои деньги</h3>
            <div id='product_add_result'></div>
            <div class="sender--input--block"> <span>Ваше имя:</span> <input class="sender--input" type="text"></div>

            <div class="sender--input--block"> <span>Телефон:</span> <input class="sender--input" type="text"></div>

            <div class="sender--input--block"> <span>E-Mail:</span> <input class="sender--input" type="text"></div>

            <div class="sender--input--block"> <span></span> <input id="button" class="sender--input" type="submit"></div>
        </form>
    </section>
    <section id="section3">
        <h3>Дела, которые мы уже выиграли</h3>
        <div class="main">
            <a class="fancybox" rel="group" href="/img/scan.jpg"><img src="/img/scan.jpg" alt=""></a> <a class="fancybox" rel="group" href="/img/scan.jpg"><img src="/img/scan.jpg" alt=""></a> <a class="fancybox" rel="group" href="/img/scan.jpg"><img src="/img/scan.jpg" alt=""></a> <a class="fancybox" rel="group" href="/img/scan.jpg"><img src="/img/scan.jpg" alt=""></a>
        </div>
    </section>
    <section id="section4">
        <h3>Отзывы о нашей работе</h3>
        <div class="main">
        <button class="send popup serv" onclick="yaCounter369452951.reachGoal('consultclick');" href="#callback_cb">Написать отзыв</button>
        <div class="owl-carousel">
            <div class="item">
                <div class="review">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloribus animi cupiditate, labore rerum dignissimos dicta, excepturi eaque eius, quisquam vitae earum aspernatur sapiente cumque delectus ipsum. Quidem dolore incidunt, nesciunt possimus, fuga accusamus impedit illo molestias maxime tenetur nobis?
                    </p>
                    <p class="author">
                        Иван Иванов
                    </p>
                </div>
            </div>
            <div class="item">
                <div class="review">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet rerum consequuntur sint eaque voluptate beatae nihil, laboriosam explicabo rem perferendis illum corrupti ullam earum, aliquid fugiat consequatur perspiciatis quibusdam itaque reiciendis quaerat fugit neque. Repellat dolores eveniet, cumque laboriosam asperiores!
                    </p>
                    <p class="author">
                        Иван Иванов
                    </p>
                </div>
            </div>
            <div class="item">
                <div class="review">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, mollitia, dignissimos. Incidunt a, natus possimus. Temporibus illo provident dolore quia. Itaque quod corporis, optio porro voluptatem! Est maiores, nostrum eos sed molestias esse expedita, sapiente sunt reprehenderit excepturi tenetur cum.
                    </p>
                    <p class="author">
                        Иван Иванов
                    </p>
                </div>
            </div>
            <div class="item">
                <div class="review">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi maxime, beatae eaque! Nemo magni, cupiditate reiciendis quod, architecto ad totam porro modi voluptates magnam quidem sapiente atque est odit. Explicabo vitae laudantium illo repudiandae id cupiditate, temporibus atque omnis reiciendis?
                    </p>
                    <p class="author">
                        Иван Иванов
                    </p>
                </div>
            </div>
        </div>
        <a href="#">&nbsp;&nbsp;Политика конфиденциальности</a> <br>
        <a href="#">&nbsp;&nbsp;Оферта</a>
    </div>
    </section>



    <div class="hidden">
        <form style="background: #fff;" onsubmit="yaCounter369452951.reachGoal('sendform');" id="callback_cb" method="post" action="/add.php" class='product_add'>
            <div class="product_add_h">Оставить отзыв</div>
            <div id='product_add_result'></div>
            <input class="inp_vspl" type="text" name="user_name" placeholder="Ваше имя*" required>
            <input class="inp_vspl" type="text" name="user_phone"  placeholder="Контактный телефон*" required>
            <input class="inp_vspl email_vspl" type="text" name="user_email"  placeholder="E-mail*" required>
            <textarea class="inp_vspl2" type="text" name="message" value="" placeholder="Сообщение"></textarea>
            <div class="block_send">
                <button class="send_vspl" type="submit">Отправить</button>
            </div>
        </form>
    </div>

    <script>
        $(function () {
            $("#clear").click(function () {
                $(".debt--result ").hide();
                $("input").val('');
            })
        })
    </script>

    <script>
        $(function () {
            $(".open_debt_result").click(function () {
                $(".debt--result ").show();
            })
        })
    </script>
    <script>
        $(function () {
            var d = new Date(),
                fd ='0'+d.getDate() + '.' + '0'+(d.getMonth()+1) + '.' + d.getFullYear();
            console.log(fd)
            $('#check1').on('change', function(){
                if($("#check1").prop('checked')){
                    $("#date_per ").val(fd);
                }
            });
        });
        //check1
    </script>



    <script type="text/javascript" src="calc.js"></script>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
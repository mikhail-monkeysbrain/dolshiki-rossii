/*������� ������ ������� ���� � �����*/
function changeDATE (data) {
    split_data = data.split('.');
    res = split_data[1]+"/"+split_data[0]+"/"+split_data[2];
    return res;
}
/*������� �������� 2 ���� � ����� ���������� ���� �������*/
function subDATE(data1,data2) {
    d1 = new Date(data1);
    d2 = new Date(data2);
    milliseconds = d2-d1;
    seconds = milliseconds / 1000;
    minutes = seconds / 60;
    hours = minutes / 60;
    days = hours / 24;
    return Math.ceil(days);
}
// ������� ����� �������� ���� � ��������� � ���� 1 ����
function dni(data){
    data2 = data.split('.');
    data3 = data2[2]+","+data2[1]+","+data2[0];
    D = new Date(data3);
    D.setDate(D.getDate() + 1);
    new_date_otvet =      D.getDate() + '.' + ((parseInt(D.getMonth()+1)<10)?'0'+parseInt(D.getMonth()+1):parseInt(D.getMonth()+1)) + '.' + D.getFullYear();
    return new_date_otvet;
}

$(function(){
    $('#date_per_dog').datepicker($.datepicker.regional["ru"]);
    $('#date_per').datepicker($.datepicker.regional["ru"])
    $("#date_per_dog").datepicker();
    $("#date_per").datepicker();
    $('#button').click(function(){
        var kof = 300;
            kof_fiz_lico = 2;
            cena_dogovora = $("#cena_dog").val(); //����������� �����!!!
            data_per_dogovor = $("#date_per_dog").val(); //������� �� ������ ����
            data_per = $("#date_per").val(); //������� �� ������ ����
            data_per_dogovor_new = dni(data_per_dogovor);
            stavka = 8.25;
            stavka2 = 11;
            stavka3 = 10.5;
            stavka4 = 10;
            string1 = "� ������� "+ data_per_dogovor_new + " �� 31.12.2015 �� ������ " + stavka;
            string2 = "� ������� 01.01.2016 �� 13.06.2016 �� ������ " + stavka2;
            string_obsh = "�� ���� ������";
        if($.isNumeric(cena_dogovora) && data_per_dogovor != '' && data_per != ''){
            //SubGlobal
            var
                data1 = changeDATE(data_per_dogovor);
                data2 = changeDATE(data_per);
                data_mayk = changeDATE('31.12.2015');
                data_mayk2 = changeDATE('13.06.2016');
                data_mayk_new = changeDATE('18.09.2016');
                promise = new Date(data1);
                infact = new Date(data2);
                d_3mayk = new Date(data_mayk);  //31.12.2015
                d_3mayk2 = new Date(data_mayk2);    //13.06.2016
                d_3mayk_new = new Date(data_mayk_new);  //18.09.2016
                data_mayk_plus1 = d_3mayk.setDate(d_3mayk.getDate() + 1);
                data_mayk2_plus1 = d_3mayk2.setDate(d_3mayk2.getDate() + 1);
                data_mayk_new_plus1 = d_3mayk_new.setDate(d_3mayk_new.getDate() + 1);
                raznicaDAYS = subDATE(data1,data2); //���� ������� ������������� �� ����������� ������� ����
                raznica_1d_mayk = subDATE(data1,data_mayk_plus1); //���������� ���� �� 1� ���� �� ������� �����
                raznica_mayk_2d = subDATE(data_mayk,data2); //���������� ���� �� 31.12.2015 �� 2� ����
                kolDays_obsh = "����� ���������� ���� ���������: " + raznicaDAYS;
                raznica_d1_mayak_new = subDATE(data1,data_mayk_new); //���-�� �� 1� ���� �� 18.09.2016
                raznica_mayak_new_2d = subDATE(data_mayk_new,data2); //���������� ���� �� 18.06.2016 �� 2� ����
            if(raznicaDAYS <= 0){
                $('.message_calc').html("<p style='color:red'>���� ������� �� �����</p>");
            }else{
                var
                    condition0 = promise <= d_3mayk && infact > d_3mayk && infact <= d_3mayk2;
                    condition1 = promise <= d_3mayk && infact > d_3mayk2 && infact < d_3mayk_new;
                    condition2 = promise > d_3mayk && infact <= d_3mayk2;
                    condition3 = promise > d_3mayk && promise <= d_3mayk2 &&  infact > d_3mayk2 && infact < d_3mayk_new;
                    condition4 = promise < d_3mayk && infact <= d_3mayk;
                    condition5 = promise > d_3mayk2 && infact > d_3mayk2 && promise < d_3mayk_new && infact < d_3mayk_new;
                    condition6 = promise <= d_3mayk && infact >= d_3mayk_new;
                    condition7 = promise > d_3mayk && promise <= d_3mayk2 && infact >= d_3mayk_new;
                    condition8 = promise > d_3mayk2 && promise < d_3mayk_new && infact >= d_3mayk_new;
                    condition9 = promise >= d_3mayk_new && infact > d_3mayk_new;
                //���� 1� ���� <= 31.12.2015 � 2� > 31.12.2015 �� <= 13.06.2016
                if(condition0){
                    console.log('condition0');
                    $('.calc_right p').text('');
                    zaDenProsrochki = stavka/kof*cena_dogovora/100*kof_fiz_lico;
                    zaPeriodProsrochki = zaDenProsrochki * parseInt(raznica_1d_mayk - 1);
                    shtraf = zaPeriodProsrochki *0.5;
                    zaDenProsrochki2 = stavka2/kof*cena_dogovora/100*kof_fiz_lico;
                    zaPeriodProsrochki2 = zaDenProsrochki2 * raznica_mayk_2d;
                    shtraf2 = zaPeriodProsrochki2 *0.5;
                    kolDays1 = "���������� ���� ���������: " + parseInt(raznica_1d_mayk - 1);
                    zDayp1 = "�� ������ ���� ���������: " + zaDenProsrochki.toFixed(2) + " ���.";
                    zPeriodp1 = "���� �� ������: " + zaPeriodProsrochki.toFixed(2) + " ���.";
                    sht1 = "����� ������: " + shtraf.toFixed(2) + " ���.";
                    string2 = "� ������� 01.01.2016 �� " + data_per + " �� ������ " + stavka2;
                    kolDays2 = "���������� ���� ���������: " + raznica_mayk_2d;
                    zDayp2 = "�� ������ ���� ���������: " + zaDenProsrochki2.toFixed(2) + " ���.";
                    zPeriodp2 = "���� �� ������: " + zaPeriodProsrochki2.toFixed(2) + " ���.";
                    sht2 = "����� ������: " + shtraf2.toFixed(2) + " ���.";
                    zPeriodp_obsh = "���� �� ���� ������: " + (zaPeriodProsrochki + zaPeriodProsrochki2).toFixed(2) + " ���.";
                    sht_obsh = "����� ������: " + (shtraf + shtraf2).toFixed(2) + " ���.";
                    if(raznica_1d_mayk != 0){
                        $('.string1').text(string1);
                        $('.kolDays1').text(kolDays1);
                        $('.zDayp1').text(zDayp1);
                        $('.zPeriodp1').text(zPeriodp1);
                        $('.sht1').text(sht1);
                    }
                    $('.string2').text(string2);
                    $('.kolDays2').text(kolDays2);
                    $('.zDayp2').text(zDayp2);
                    $('.zPeriodp2').text(zPeriodp2);
                    $('.sht2').text(sht2);
                    $('.string_obsh').text(string_obsh);
                    $('.kolDays_obsh').text(kolDays_obsh);
                    $('.zPeriodp_obsh').text(zPeriodp_obsh);
                    $('.sht_obsh').text(sht_obsh);
                    $('.message_calc').html("<p style='color:green'>������ ����������</p>");
                    //���� 1� ���� <= 31.12.2015 � 2� > 13.06.2016    �� <= 18.09.2016
                }else if(condition1){
                    console.log('condition1');
                    $('.calc_right p').text('');
                    raznica_mayak_mayak2 = subDATE(data_mayk,data_mayk2); //���������� ���� �� 01.01.2016 �� 13.06.2016
                    raznica_mayak2_2d = subDATE(data_mayk2,data2); //���������� ���� �� 14.06.2016 �� 2� ����
                    if(raznica_1d_mayk == 1){
                        raznica_1d_mayk = parseInt(raznica_1d_mayk - 1);
                    }
                    if(raznica_1d_mayk == 0){
                        zaDenProsrochki = 0;
                        zaPeriodProsrochki = 0;
                        shtraf = 0;
                    }else{
                        zaDenProsrochki = stavka/kof*cena_dogovora/100*kof_fiz_lico;
                        zaPeriodProsrochki = zaDenProsrochki * parseInt(raznica_1d_mayk - 1);
                        shtraf = zaPeriodProsrochki *0.5;
                    }
                    zaDenProsrochki2 = stavka2/kof*cena_dogovora/100*kof_fiz_lico;
                    zaPeriodProsrochki2 = zaDenProsrochki2 * raznica_mayak_mayak2;
                    shtraf2 = zaPeriodProsrochki2 *0.5;
                    zaDenProsrochki3 = stavka3/kof*cena_dogovora/100*kof_fiz_lico;
                    zaPeriodProsrochki3 = zaDenProsrochki3 * raznica_mayak2_2d;
                    shtraf3 = zaPeriodProsrochki3 *0.5;
                    string1 = "� ������� "+data_per_dogovor_new + " �� 31.12.2015 �� ������ " + stavka;
                    kolDays1 = "���������� ���� ���������: " + parseInt(raznica_1d_mayk - 1);
                    zDayp1 = "�� ������ ���� ���������: " + zaDenProsrochki.toFixed(2) + " ���.";
                    zPeriodp1 = "���� �� ������: " + zaPeriodProsrochki.toFixed(2) + " ���.";
                    sht1 = "����� ������: " + shtraf.toFixed(2) + " ���.";
                    //�� 01.01.2016 �� 13.06.2016
                    kolDays2 = "���������� ���� ���������: " + raznica_mayak_mayak2;
                    zDayp2 = "�� ������ ���� ���������: " + zaDenProsrochki2.toFixed(2) + " ���.";
                    zPeriodp2 = "���� �� ������: " + zaPeriodProsrochki2.toFixed(2) + " ���.";
                    sht2 = "����� ������: " + shtraf2.toFixed(2) + " ���.";
                    //�� 14.06.2016
                    string3 = "� ������� 14.06.2016 �� " + data_per + " �� ������ " + stavka3;
                    kolDays3 = "���������� ���� ���������: " + raznica_mayak2_2d;
                    zDayp3 = "�� ������ ���� ���������: " + zaDenProsrochki3.toFixed(2) + " ���.";
                    zPeriodp3 = "���� �� ������: " + zaPeriodProsrochki3.toFixed(2) + " ���.";
                    sht3 = "����� ������: " + shtraf3.toFixed(2) + " ���.";
                    zPeriodp_obsh = "���� �� ���� ������: " + (zaPeriodProsrochki + zaPeriodProsrochki2 + zaPeriodProsrochki3).toFixed(2) + " ���.";
                    sht_obsh = "����� ������: " + (shtraf + shtraf2 + shtraf3).toFixed(2) + " ���.";
                    if(raznica_1d_mayk != 0){
                        $('.string1').text(string1);
                        $('.kolDays1').text(kolDays1);
                        $('.zDayp1').text(zDayp1);
                        $('.zPeriodp1').text(zPeriodp1);
                        $('.sht1').text(sht1);
                    }
                    $('.string2').text(string2);
                    $('.kolDays2').text(kolDays2);
                    $('.zDayp2').text(zDayp2);
                    $('.zPeriodp2').text(zPeriodp2);
                    $('.sht2').text(sht2);
                    $('.string3').text(string3);
                    $('.kolDays3').text(kolDays3);
                    $('.zDayp3').text(zDayp3);
                    $('.zPeriodp3').text(zPeriodp3);
                    $('.sht3').text(sht3);
                    $('.string_obsh').text(string_obsh);
                    $('.kolDays_obsh').text(kolDays_obsh);
                    $('.zPeriodp_obsh').text(zPeriodp_obsh);
                    $('.sht_obsh').text(sht_obsh);
                    $('.message_calc').html("<p style='color:green'>������ ����������</p>");
                    //���� 1� ���� > 01.01.2016 � 2� > 01.01.2016 �� <= 13.06.2016
                }else if(condition2){
                    console.log('condition2');
                    $('.calc_right p').text('');
                    zaDenProsrochki = stavka2/kof*cena_dogovora/100*kof_fiz_lico;
                    zaPeriodProsrochki = zaDenProsrochki * raznicaDAYS;
                    shtraf = zaPeriodProsrochki *0.5;
                    string1 = "� ������� "+data_per_dogovor_new + " �� " + data_per + " �� ������ " + stavka2;
                    kolDays1 = "���������� ���� ���������: " + raznicaDAYS;
                    zDayp1 = "�� ������ ���� ���������: " + zaDenProsrochki.toFixed(2) + " ���.";
                    zPeriodp1 = "���� �� ������: " + zaPeriodProsrochki.toFixed(2) + " ���.";
                    sht1 = "����� ������: " + shtraf.toFixed(2) + " ���.";
                    $('.string1').text(string1);
                    $('.kolDays1').text(kolDays1);
                    $('.zDayp1').text(zDayp1);
                    $('.zPeriodp1').text(zPeriodp1);
                    $('.sht1').text(sht1);
                    $('.message_calc').html("<p style='color:green'>������ ����������</p>");
                }else if(condition3){
                    console.log('condition3');
                    $('.calc_right p').text('');
                    raznica_1d_mayk = subDATE(data1,data_mayk2); //���������� ���� �� 1� ���� �� 13.06.2016
                    raznica_mayak2_2d = subDATE(data_mayk2,data2); //���������� ���� �� 14.06.2016 �� 2� ����//////////
                    if(raznica_1d_mayk == 0){
                        zaDenProsrochki = 0;
                        zaPeriodProsrochki = 0;
                        shtraf = 0;
                    }else{
                        zaDenProsrochki = stavka2/kof*cena_dogovora/100*kof_fiz_lico;
                        zaPeriodProsrochki = zaDenProsrochki * raznica_1d_mayk;
                        shtraf = zaPeriodProsrochki *0.5;
                    }
                    zaDenProsrochki2 = stavka3/kof*cena_dogovora/100*kof_fiz_lico;
                    zaPeriodProsrochki2 = zaDenProsrochki2 * raznica_mayak2_2d;
                    shtraf2 = zaPeriodProsrochki2 *0.5;
                    zPeriodp_obsh = "���� �� ���� ������: " + (zaPeriodProsrochki + zaPeriodProsrochki2).toFixed(2) + " ���.";
                    sht_obsh = "����� ������: " + (shtraf + shtraf2).toFixed(2) + " ���.";
                    string1 = "� ������� "+data_per_dogovor_new + " �� 13.06.2016 �� ������ " + stavka2;
                    kolDays1 = "���������� ���� ���������: " + raznica_1d_mayk;
                    zDayp1 = "�� ������ ���� ���������: " + zaDenProsrochki.toFixed(2) + " ���.";
                    zPeriodp1 = "���� �� ������: " + zaPeriodProsrochki.toFixed(2) + " ���.";
                    sht1 = "����� ������: " + shtraf.toFixed(2) + " ���.";
                    // c 14.06.2016 �� 2� ����
                    string2 = "� ������� 14.06.2016 �� " + data_per + " �� ������ " + stavka3;
                    kolDays2 = "���������� ���� ���������: " + raznica_mayak2_2d;
                    zDayp2 = "�� ������ ���� ���������: " + zaDenProsrochki2.toFixed(2) + " ���.";
                    zPeriodp2 = "���� �� ������: " + zaPeriodProsrochki2.toFixed(2) + " ���.";
                    sht2 = "����� ������: " + shtraf2.toFixed(2) + " ���.";
                    //�����
                    zPeriodp_obsh = "���� �� ���� ������: " + (zaPeriodProsrochki + zaPeriodProsrochki2).toFixed(2) + " ���.";
                    sht_obsh = "����� ������: " + (shtraf + shtraf2).toFixed(2) + " ���.";
                    if(raznica_1d_mayk != 0){
                        $('.string1').text(string1);
                        $('.kolDays1').text(kolDays1);
                        $('.zDayp1').text(zDayp1);
                        $('.zPeriodp1').text(zPeriodp1);
                        $('.sht1').text(sht1);
                    }
                    $('.string2').text(string2);
                    $('.kolDays2').text(kolDays2);
                    $('.zDayp2').text(zDayp2);
                    $('.zPeriodp2').text(zPeriodp2);
                    $('.sht2').text(sht2);
                    $('.string_obsh').text(string_obsh);
                    $('.kolDays_obsh').text(kolDays_obsh);
                    $('.zPeriodp_obsh').text(zPeriodp_obsh);
                    $('.sht_obsh').text(sht_obsh);
                    $('.message_calc').html("<p style='color:green'>������ ����������</p>");
                    //���� 1� ���� < 31.12.2015 � 2� <=  31.12.2015
                }else if(condition4){
                    console.log('condition4');
                    $('.calc_right p').text('');
                    zaDenProsrochki = stavka/kof*cena_dogovora/100*kof_fiz_lico;
                    zaPeriodProsrochki = zaDenProsrochki * raznicaDAYS;
                    shtraf = zaPeriodProsrochki *0.5;
                    string1 = "� ������� "+data_per_dogovor_new + " �� " + data_per + " �� ������ " + stavka;
                    kolDays1 = "���������� ���� ���������: " + raznicaDAYS;
                    zDayp1 = "�� ������ ���� ���������: " + zaDenProsrochki.toFixed(2) + " ���.";
                    zPeriodp1 = "���� �� ������: " + zaPeriodProsrochki.toFixed(2) + " ���.";
                    sht1 = "����� ������: " + shtraf.toFixed(2) + " ���.";
                    $('.string1').text(string1);
                    $('.kolDays1').text(kolDays1);
                    $('.zDayp1').text(zDayp1);
                    $('.zPeriodp1').text(zPeriodp1);
                    $('.sht1').text(sht1);
                    $('.message_calc').html("<p style='color:green'>������ ����������</p>");
                    //���� 1� ���� > 13.06.2016 �� <= 18.09.2016 � 2� >  13.06.2016 �� <= 18.09.2016
                }else if(condition5){
                    console.log('condition5');
                    $('.calc_right p').text('');
                    stavka = 10.5;
                    zaDenProsrochki = stavka3/kof*cena_dogovora/100*kof_fiz_lico;
                    zaPeriodProsrochki = zaDenProsrochki * raznicaDAYS;
                    shtraf = zaPeriodProsrochki *0.5;
                    string1 = "� ������� "+ data_per_dogovor_new + " �� " + data_per + " �� ������ " + stavka3;
                    kolDays1 = "���������� ���� ���������: " + raznicaDAYS;
                    zDayp1 = "�� ������ ���� ���������: " + zaDenProsrochki.toFixed(2) + " ���.";
                    zPeriodp1 = "���� �� ������: " + zaPeriodProsrochki.toFixed(2) + " ���.";
                    sht1 = "����� ������: " + shtraf.toFixed(2) + " ���.";
                    $('.string1').text(string1);
                    $('.kolDays1').text(kolDays1);
                    $('.zDayp1').text(zDayp1);
                    $('.zPeriodp1').text(zPeriodp1);
                    $('.sht1').text(sht1);
                    $('.message_calc').html("<p style='color:green'>������ ����������</p>");
                    //���� 1� ���� <= 31.12.2015 � 2� > 18.09.2016
                }else if(condition6){
                    console.log('condition6');
                    $('.calc_right p').text('');
                    raznica_mayak_mayak2 = subDATE(data_mayk,data_mayk2); //���������� ���� �� 01.01.2016 �� 13.06.2016
                    raznica_mayak2_mayak_new = subDATE(data_mayk2,data_mayk_new);
                    raznica_mayak_new_2d = subDATE(data_mayk_new,data2); //���������� ���� �� 18.09.2016 �� 2� ���
                    if(raznica_1d_mayk == 1){
                        raznica_1d_mayk = parseInt(raznica_1d_mayk - 1);
                    }
                    // ������ �� ������ �� 1� ���� �� 31.12.2015
                    if(raznica_1d_mayk == 0){   //++++++++++++++++++++++
                        zaDenProsrochki = 0;
                        zaPeriodProsrochki = 0;
                        shtraf = 0;
                    }else{
                        zaDenProsrochki = stavka/kof*cena_dogovora/100*kof_fiz_lico;
                        zaPeriodProsrochki = zaDenProsrochki * parseInt(raznica_1d_mayk - 1);//++++++++++++++
                        shtraf = zaPeriodProsrochki *0.5;
                    }
                    // ������ �� ������ �� 01.01.2016 �� 13.06.2016
                    zaDenProsrochki2 = stavka2/kof*cena_dogovora/100*kof_fiz_lico;
                    zaPeriodProsrochki2 = zaDenProsrochki2 * raznica_mayak_mayak2;
                    shtraf2 = zaPeriodProsrochki2 *.5;
                    // ������ �� ������ �� 14.06.2016 �� 18.09.2016
                    zaDenProsrochki3 = stavka3/kof*cena_dogovora/100*kof_fiz_lico;
                    zaPeriodProsrochki3 = zaDenProsrochki3 * raznica_mayak2_mayak_new;
                    shtraf3 = zaPeriodProsrochki3 *0.5;
                    // ������ �� ������ �� 18.09.2016
                    zaDenProsrochki4 = stavka4/kof*cena_dogovora/100*kof_fiz_lico;
                    zaPeriodProsrochki4 = zaDenProsrochki4 * raznica_mayak_new_2d;
                    shtraf4 = zaPeriodProsrochki4 *0.5;
                    //�� 1� ���� �� 31.12.2015
                    string1 = "� ������� "+ data_per_dogovor_new + " �� 31.12.2015 �� ������ " + stavka;
                    kolDays1 = "���������� ���� ���������: " + parseInt(raznica_1d_mayk - 1);
                    zDayp1 = "�� ������ ���� ���������: " + zaDenProsrochki.toFixed(2) + " ���.";
                    zPeriodp1 = "���� �� ������: " + zaPeriodProsrochki.toFixed(2) + " ���.";
                    sht1 = "����� ������: " + shtraf.toFixed(2) + " ���.";
                    //�� 01.01.2016 �� 13.06.2016
                    string2 = "� ������� 14.06.2016 �� 18.09.2016 �� ������ " + stavka2;
                    kolDays2 = "���������� ���� ���������: " + raznica_mayak_mayak2;
                    zDayp2 = "�� ������ ���� ���������: " + zaDenProsrochki2.toFixed(2) + " ���.";
                    zPeriodp2 = "���� �� ������: " + zaPeriodProsrochki2.toFixed(2) + " ���.";
                    sht2 = "����� ������: " + shtraf2.toFixed(2) + " ���."
                    //�� 14.06.2016 ��     18.09.2016
                    string3 = "� ������� 14.06.2016 �� 18.09.2016 �� ������ " + stavka3;
                    kolDays3 = "���������� ���� ���������: " + raznica_mayak2_mayak_new;
                    zDayp3 = "�� ������ ���� ���������: " + zaDenProsrochki3.toFixed(2) + " ���.";
                    zPeriodp3 = "���� �� ������: " + zaPeriodProsrochki3.toFixed(2) + " ���.";
                    sht3 = "����� ������: " + shtraf3.toFixed(2) + " ���.";
                    console.log("123");
                    //�� 19.09.2016
                    string4 = "� ������� 19.09.2016 �� " + data_per + " �� ������ " + stavka4;
                    kolDays4 = "���������� ���� ���������: " + raznica_mayak_new_2d;
                    zDayp4 = "�� ������ ���� ���������: " + zaDenProsrochki4.toFixed(2) + " ���.";
                    zPeriodp4 = "���� �� ������: " + zaPeriodProsrochki4.toFixed(2) + " ���.";
                    sht4 = "����� ������: " + shtraf4.toFixed(2) + " ���."
                    //�����
                    //zDayp_obsh = "�� ������ ���� ���������: "+zaDenProsrochki2.toFixed(2)+" ���.";
                    zPeriodp_obsh = "���� �� ���� ������: " + (zaPeriodProsrochki + zaPeriodProsrochki2 + zaPeriodProsrochki3 + zaPeriodProsrochki4).toFixed(2) + " ���.";
                    sht_obsh = "����� ������: " + (shtraf + shtraf2 + shtraf3 + shtraf4).toFixed(2) + " ���.";
                    if(raznica_1d_mayk != 0){
                        $('.string1').text(string1);
                        $('.kolDays1').text(kolDays1);
                        $('.zDayp1').text(zDayp1);
                        $('.zPeriodp1').text(zPeriodp1);
                        $('.sht1').text(sht1);
                    }
                    $('.string2').text(string2);
                    $('.kolDays2').text(kolDays2);
                    $('.zDayp2').text(zDayp2);
                    $('.zPeriodp2').text(zPeriodp2);
                    $('.sht2').text(sht2);
                    $('.string3').text(string3);
                    $('.kolDays3').text(kolDays3);
                    $('.zDayp3').text(zDayp3);
                    $('.zPeriodp3').text(zPeriodp3);
                    $('.sht3').text(sht3);
                    $('.string4').text(string4);
                    $('.kolDays4').text(kolDays4);
                    $('.zDayp4').text(zDayp4);
                    $('.zPeriodp4').text(zPeriodp4);
                    $('.sht4').text(sht4);
                    $('.string_obsh').text(string_obsh);
                    $('.kolDays_obsh').text(kolDays_obsh);
                    $('.zPeriodp_obsh').text(zPeriodp_obsh);
                    $('.sht_obsh').text(sht_obsh);
                    $('.message_calc').html("<p style='color:green'>������ ����������</p>");
                    //���� 1� ���� > 31.12.2015 �� <= 13.06.2016 � 2� > 18.09.2016
                }else if(condition7){
                    console.log('condition7');
                    $('.calc_right p').text('');
                    raznica_1d_mayak2 = subDATE(data1,data_mayk2); //���������� ���� �� 1� ���� �� 13.06.2016
                    raznica_mayak2_mayak_new = subDATE(data_mayk2,data_mayk_new); //���-�� �� 13.06.2016 �� 18.09.2016
                    raznica_mayak_new_2d = subDATE(data_mayk_new,data2); //���������� ���� �� 18.06.2016 �� 2� ���
                    // ������ �� ������ �� 01.01.2016 �� 13.06.2016
                    if(raznica_1d_mayak2 == 0){ //++++++++++++++++++++++
                        zaDenProsrochki = 0;
                        zaPeriodProsrochki = 0;
                        shtraf = 0;
                    }else{
                        zaDenProsrochki = stavka2/kof*cena_dogovora/100*kof_fiz_lico;
                        zaPeriodProsrochki = zaDenProsrochki * parseInt(raznica_1d_mayak2 - 1);//++++++++++++++
                        shtraf = zaPeriodProsrochki *0.5;
                    }
                    // ������ �� ������ �� 14.06.2016 �� 18.09.2016
                    zaDenProsrochki2 = stavka3/kof*cena_dogovora/100*kof_fiz_lico;
                    zaPeriodProsrochki2 = zaDenProsrochki2 * raznica_mayak2_mayak_new;
                    shtraf2 = zaPeriodProsrochki2 *0.5;
                    // ������ �� ������ �� 18.09.2016
                    zaDenProsrochki3 = stavka4/kof*cena_dogovora/100*kof_fiz_lico;
                    zaPeriodProsrochki3 = zaDenProsrochki3 * raznica_mayak_new_2d;
                    shtraf3 = zaPeriodProsrochki3 *0.5;
                    //�� 01.01.2016 �� 13.06.2016
                    string1 = "� ������� "+ data_per_dogovor + " �� 13.06.2016 " + " �� ������ " + stavka2;
                    kolDays1 = "���������� ���� ���������: " + raznica_1d_mayak2;
                    zDayp1 = "�� ������ ���� ���������: " + zaDenProsrochki.toFixed(2) + " ���.";
                    zPeriodp1 = "���� �� ������: " + zaPeriodProsrochki.toFixed(2) + " ���.";
                    sht1 = "����� ������: " + shtraf.toFixed(2) + " ���."
                    //�� 14.06.2016 ��     18.09.2016
                    string2 = "� ������� 14.06.2016 �� 18.09.2016 �� ������ " + stavka3;
                    kolDays2 = "���������� ���� ���������: " + raznica_mayak2_mayak_new;
                    zDayp2 = "�� ������ ���� ���������: " + zaDenProsrochki2.toFixed(2) + " ���.";
                    zPeriodp2 = "���� �� ������: " + zaPeriodProsrochki2.toFixed(2) + " ���.";
                    sht2 = "����� ������: " + shtraf2.toFixed(2) + " ���.";
                    //�� 19.09.2016
                    string3 = "� ������� 19.09.2016 �� " + data_per + " �� ������ " + stavka4;
                    kolDays3 = "���������� ���� ���������: " + raznica_mayak_new_2d;
                    zDayp3 = "�� ������ ���� ���������: " + zaDenProsrochki3.toFixed(2) + " ���.";
                    zPeriodp3 = "���� �� ������: " + zaPeriodProsrochki3.toFixed(2) + " ���.";
                    sht3 = "����� ������: " + shtraf3.toFixed(2) + " ���."
                    zPeriodp_obsh = "���� �� ���� ������: " + (zaPeriodProsrochki + zaPeriodProsrochki2 + zaPeriodProsrochki3).toFixed(2) + " ���.";
                    sht_obsh = "����� ������: " + (shtraf + shtraf2 + shtraf3).toFixed(2) + " ���.";
                    if(raznica_1d_mayak2 != 0){
                        $('.string1').text(string1);
                        $('.kolDays1').text(kolDays1);
                        $('.zDayp1').text(zDayp1);
                        $('.zPeriodp1').text(zPeriodp1);
                        $('.sht1').text(sht1);
                    }
                    $('.string2').text(string2);
                    $('.kolDays2').text(kolDays2);
                    $('.zDayp2').text(zDayp2);
                    $('.zPeriodp2').text(zPeriodp2);
                    $('.sht2').text(sht2);
                    $('.string3').text(string3);
                    $('.kolDays3').text(kolDays3);
                    $('.zDayp3').text(zDayp3);
                    $('.zPeriodp3').text(zPeriodp3);
                    $('.sht3').text(sht3);
                    $('.string_obsh').text(string_obsh);
                    $('.kolDays_obsh').text(kolDays_obsh);
                    $('.zPeriodp_obsh').text(zPeriodp_obsh);
                    $('.sht_obsh').text(sht_obsh);
                    $('.message_calc').html("<p style='color:green'>������ ����������</p>");
                    //���� 1� ���� > 13.06.2016 �� <= 18.09.2016 � 2� > 18.09.2016
                }else if(condition8){
                    console.log('condition8');
                    $('.calc_right p').text('');
                    // ������ �� ������ �� 1� ���� �� 18.09.2016
                    zaDenProsrochki = stavka3/kof*cena_dogovora/100*kof_fiz_lico;
                    zaPeriodProsrochki = zaDenProsrochki * raznica_d1_mayak_new;
                    shtraf = zaPeriodProsrochki *0.5;
                    // ������ �� ������ �� 18.09.2016 �� 2� ����
                    zaDenProsrochki2 = stavka4/kof*cena_dogovora/100*kof_fiz_lico;
                    zaPeriodProsrochki2 = zaDenProsrochki2 * raznica_mayak_new_2d;
                    shtraf2 = zaPeriodProsrochki2 *0.5;
                    //�� 1� ���� �� 18.09.2016
                    string1 = "� ������� "+ data_per_dogovor_new + " �� 18.09.2016 " + " �� ������ " + stavka3;
                    kolDays1 = "���������� ���� ���������: " + raznica_d1_mayak_new;
                    zDayp1 = "�� ������ ���� ���������: " + zaDenProsrochki.toFixed(2) + " ���.";
                    zPeriodp1 = "���� �� ������: " + zaPeriodProsrochki.toFixed(2) + " ���.";
                    sht1 = "����� ������: " + shtraf.toFixed(2) + " ���."
                    //�� 19.09.2016 �� 2� ����
                    string2 = "� ������� 19.09.2016 �� " + data_per + " �� ������ " + stavka4;
                    kolDays2 = "���������� ���� ���������: " + raznica_mayak_new_2d;
                    zDayp2 = "�� ������ ���� ���������: " + zaDenProsrochki2.toFixed(2) + " ���.";
                    zPeriodp2 = "���� �� ������: " + zaPeriodProsrochki2.toFixed(2) + " ���.";
                    sht2 = "����� ������: " + shtraf2.toFixed(2) + " ���."
                    zPeriodp_obsh = "���� �� ���� ������: " + (zaPeriodProsrochki + zaPeriodProsrochki2).toFixed(2) + " ���.";
                    sht_obsh = "����� ������: " + (shtraf + shtraf2).toFixed(2) + " ���.";
                    $('.string1').text(string1);
                    $('.kolDays1').text(kolDays1);
                    $('.zDayp1').text(zDayp1);
                    $('.zPeriodp1').text(zPeriodp1);
                    $('.sht1').text(sht1);
                    $('.string2').text(string2);
                    $('.kolDays2').text(kolDays2);
                    $('.zDayp2').text(zDayp2);
                    $('.zPeriodp2').text(zPeriodp2);
                    $('.sht2').text(sht2);
                    $('.string_obsh').text(string_obsh);
                    $('.kolDays_obsh').text(kolDays_obsh);
                    $('.zPeriodp_obsh').text(zPeriodp_obsh);
                    $('.sht_obsh').text(sht_obsh);
                    $('.message_calc').html("<p style='color:green'>������ ����������</p>");
                }else if(condition9){
                    console.log('condition9');
                    $('.calc_right p').text('');
                    zaDenProsrochki = stavka4/kof*cena_dogovora/100*kof_fiz_lico;
                    zaPeriodProsrochki = zaDenProsrochki * raznicaDAYS;
                    shtraf = zaPeriodProsrochki *0.5;
                    string1 = "� ������� "+data_per_dogovor_new + " �� " + data_per + " �� ������ " + stavka4;
                    kolDays1 = "���������� ���� ���������: " + raznicaDAYS;
                    zDayp1 = "�� ������ ���� ���������: " + zaDenProsrochki.toFixed(2) + " ���.";
                    zPeriodp1 = "���� �� ������: " + zaPeriodProsrochki.toFixed(2) + " ���.";
                    sht1 = "����� ������: " + shtraf.toFixed(2) + " ���.";
                    $('.string1').text(string1);
                    $('.kolDays1').text(kolDays1);
                    $('.zDayp1').text(zDayp1);
                    $('.zPeriodp1').text(zPeriodp1);
                    $('.sht1').text(sht1);
                    $('.message_calc').html("<p style='color:green'>������ ����������</p>");
                }
            }
        }else{
            $('.message_calc').html("<p style='color:red'>��������� ���� ���������� * � ����������� �������</p>");
        }
    });
});
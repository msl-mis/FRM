﻿<%@ page language="C#" autoeventwireup="true" inherits="src_RES_RESE011_editor_color, src.FRM.RESE011" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>
        <%=headTitle %></title>
    <style type="text/css">
        body, td
        {
            font-size: 12px;
            line-height: 12px;
        }
        div
        {
            width: 12px;
            height: 12px;
            margin: 0px;
            border: 0px;
            cursor: default;
        }
    </style>

    <script>
        if (typeof (gIsIEBrowser) == "undefined")
        {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match(/rv:([\d.]+)\) like gecko/) != null || ua.match(/msie ([\d.]+)/) != null)
            {
                gIsIEBrowser = true;
            }
            else
            {
                gIsIEBrowser = false;
            }
        }

        function ColorSelected(c)
        {
            if (gIsIEBrowser)
            {
                window.returnValue = c;
                window.close();
            }
            else
            {
                parent.showDivDialogCallBack(c);
            }
        }
    </script>

</head>
<body bgcolor="#dbdbdb" scroll="no">
    <table border="1" cellpadding="0" cellspacing="0" bordercolorlight="#888070" bordercolordark="#efece8"
        align="center">
        <tr>
            <td bgcolor="#FFFFFF">
                <div style="color: #FFFFFF" onclick="ColorSelected('#FFFFFF');">
                    ■</div>
            </td>
            <td bgcolor="#FFCCCC">
                <div style="color: #FFCCCC" onclick="ColorSelected('#FFCCCC');">
                    ■</div>
            </td>
            <td bgcolor="#FFCC99">
                <div style="color: #FFCC99" onclick="ColorSelected('#FFCC99');">
                    ■</div>
            </td>
            <td bgcolor="#FFFFCC">
                <div style="color: #FFFFCC" onclick="ColorSelected('#FFFFCC');">
                    ■</div>
            </td>
            <td bgcolor="#99FF99">
                <div style="color: #99FF99" onclick="ColorSelected('#99FF99');">
                    ■</div>
            </td>
            <td bgcolor="#CCFFFF">
                <div style="color: #CCFFFF" onclick="ColorSelected('#CCFFFF');">
                    ■</div>
            </td>
            <td bgcolor="#FFCCFF">
                <div style="color: #FFCCFF" onclick="ColorSelected('#FFCCFF');">
                    ■</div>
            </td>
        </tr>
        <tr>
            <td bgcolor="#CCCCCC">
                <div style="color: #CCCCCC" onclick="ColorSelected('#CCCCCC');">
                    ■</div>
            </td>
            <td bgcolor="#FF6666">
                <div style="color: #FF6666" onclick="ColorSelected('#FF6666');">
                    ■</div>
            </td>
            <td bgcolor="#FFBB33">
                <div style="color: #FFBB33" onclick="ColorSelected('#FFBB33');">
                    ■</div>
            </td>
            <td bgcolor="#FFFF99">
                <div style="color: #FFFF99" onclick="ColorSelected('#FFFF99');">
                    ■</div>
            </td>
            <td bgcolor="#66FF99">
                <div style="color: #66FF99" onclick="ColorSelected('#66FF99');">
                    ■</div>
            </td>
            <td bgcolor="#66FFFF">
                <div style="color: #66FFFF" onclick="ColorSelected('#66FFFF');">
                    ■</div>
            </td>
            <td bgcolor="#FF99FF">
                <div style="color: #FF99FF" onclick="ColorSelected('#FF99FF');">
                    ■</div>
            </td>
        </tr>
        <tr>
            <td bgcolor="#C0C0C0">
                <div style="color: #C0C0C0" onclick="ColorSelected('#C0C0C0');">
                    ■</div>
            </td>
            <td bgcolor="#FF0000">
                <div style="color: #FF0000" onclick="ColorSelected('#FF0000');">
                    ■</div>
            </td>
            <td bgcolor="#FF9900">
                <div style="color: #FF9900" onclick="ColorSelected('#FF9900');">
                    ■</div>
            </td>
            <td bgcolor="#FFFF00">
                <div style="color: #FFFF00" onclick="ColorSelected('#FFFF00');">
                    ■</div>
            </td>
            <td bgcolor="#33FF33">
                <div style="color: #33FF33" onclick="ColorSelected('#33FF33');">
                    ■</div>
            </td>
            <td bgcolor="#33CCFF">
                <div style="color: #33CCFF" onclick="ColorSelected('#33CCFF');">
                    ■</div>
            </td>
            <td bgcolor="#DD77DD">
                <div style="color: #DD77DD" onclick="ColorSelected('#DD77DD');">
                    ■</div>
            </td>
        </tr>
        <tr>
            <td bgcolor="#999999">
                <div style="color: #999999" onclick="ColorSelected('#999999');">
                    ■</div>
            </td>
            <td bgcolor="#CC0000">
                <div style="color: #CC0000" onclick="ColorSelected('#CC0000');">
                    ■</div>
            </td>
            <td bgcolor="#FF6600">
                <div style="color: #FF6600" onclick="ColorSelected('#FF6600');">
                    ■</div>
            </td>
            <td bgcolor="#DDCC00">
                <div style="color: #DDCC00" onclick="ColorSelected('#DDCC00');">
                    ■</div>
            </td>
            <td bgcolor="#00CC00">
                <div style="color: #00CC00" onclick="ColorSelected('#00CC00');">
                    ■</div>
            </td>
            <td bgcolor="#4488FF">
                <div style="color: #4488FF" onclick="ColorSelected('#4488FF');">
                    ■</div>
            </td>
            <td bgcolor="#CC33CC">
                <div style="color: #CC33CC" onclick="ColorSelected('#CC33CC');">
                    ■</div>
            </td>
        </tr>
        <tr>
            <td bgcolor="#666666">
                <div style="color: #666666" onclick="ColorSelected('#666666');">
                    ■</div>
            </td>
            <td bgcolor="#990000">
                <div style="color: #990000" onclick="ColorSelected('#990000');">
                    ■</div>
            </td>
            <td bgcolor="#CC6600">
                <div style="color: #CC6600" onclick="ColorSelected('#CC6600');">
                    ■</div>
            </td>
            <td bgcolor="#999900">
                <div style="color: #999900" onclick="ColorSelected('#999900');">
                    ■</div>
            </td>
            <td bgcolor="#009900">
                <div style="color: #009900" onclick="ColorSelected('#009900');">
                    ■</div>
            </td>
            <td bgcolor="#3333FF">
                <div style="color: #3333FF" onclick="ColorSelected('#3333FF');">
                    ■</div>
            </td>
            <td bgcolor="#993366">
                <div style="color: #993366" onclick="ColorSelected('#993366');">
                    ■</div>
            </td>
        </tr>
        <tr>
            <td bgcolor="#333333">
                <div style="color: #333333" onclick="ColorSelected('#333333');">
                    ■</div>
            </td>
            <td bgcolor="#660000">
                <div style="color: #660000" onclick="ColorSelected('#660000');">
                    ■</div>
            </td>
            <td bgcolor="#993300">
                <div style="color: #993300" onclick="ColorSelected('#993300');">
                    ■</div>
            </td>
            <td bgcolor="#666600">
                <div style="color: #666600" onclick="ColorSelected('#666600');">
                    ■</div>
            </td>
            <td bgcolor="#006600">
                <div style="color: #006600" onclick="ColorSelected('#006600');">
                    ■</div>
            </td>
            <td bgcolor="#000099">
                <div style="color: #000099" onclick="ColorSelected('#000099');">
                    ■</div>
            </td>
            <td bgcolor="#663366">
                <div style="color: #663366" onclick="ColorSelected('#663366');">
                    ■</div>
            </td>
        </tr>
        <tr>
            <td bgcolor="#000000">
                <div style="color: #000000" onclick="ColorSelected('#000000');">
                    ■</div>
            </td>
            <td bgcolor="#330000">
                <div style="color: #330000" onclick="ColorSelected('#330000');">
                    ■</div>
            </td>
            <td bgcolor="#663300">
                <div style="color: #663300" onclick="ColorSelected('#663300');">
                    ■</div>
            </td>
            <td bgcolor="#333300">
                <div style="color: #333300" onclick="ColorSelected('#333300');">
                    ■</div>
            </td>
            <td bgcolor="#003300">
                <div style="color: #003300" onclick="ColorSelected('#003300');">
                    ■</div>
            </td>
            <td bgcolor="#000066">
                <div style="color: #000066" onclick="ColorSelected('#000066');">
                    ■</div>
            </td>
            <td bgcolor="#330033">
                <div style="color: #330033" onclick="ColorSelected('#330033');">
                    ■</div>
            </td>
        </tr>
    </table>
</body>
</html>
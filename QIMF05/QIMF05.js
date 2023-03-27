﻿//=========================================================
//^_^ 20190822 edit by 06475 lijyun DSCBV0972A_38_0001
//^_^ 20191122 edit by 13058 winni DSCBV0972A_38_0001
//=========================================================
var gMasterPageID = "MasterPage_MasterPageContent";//主版頁面的ID
var gField_companyid = "qimf05003";//公司別代號的id
//單頭自訂驗證
//2013/02/04:3.5.1.48:hiro:S00-20120626008:雙檔表單簽核鈕(發單、准、同意、會辦)增加單身驗證功能↓
function CustomerSaveCheck_Head(tStatus)
//2013/02/04:3.5.1.48:hiro:S00-20120626008:雙檔表單簽核鈕(發單、准、同意、會辦)增加單身驗證功能↑
{
	var tErr = "";
	var tMsg = "";
	var tFieldNotFilledMsg = getI18NForSpecial('PSMSG', 'Validation', 'RequriedFieldNotFilled', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	var tIntErrMsg = getI18NForSpecial('PSMSG', 'Validation', 'IntErrMsg', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	var tFloatErrMsg = getI18NForSpecial('PSMSG', 'Validation', 'FloatErrMsg', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	var tDecimalErrMsg = getI18NForSpecial('PSMSG', 'Validation', 'DecimalErrMsg', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	if (tStatus == "CREATE")
	{
		//填表時要驗證

	}
	else if (tStatus == "APPROVE")
	{
		//簽核時要驗證

	}

	//填表及簽核都要驗證
	//不允許空白驗證
	var tqimf05005 = $('#MasterPage_MasterPageContent_qimf05005_txt');
	if(tqimf05005.length>0){
		var tqimf05005Value = $('#MasterPage_MasterPageContent_qimf05005_txt').val().trim();
		if (tqimf05005Value.length==0){
			//欄位不允許空白 !
			tErr += '「' + getI18NForSpecial('FD', 'QIMF05', 'qimf05005', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
		}
	}
	//不允許空白驗證
	var tqimf05006 = $('#MasterPage_MasterPageContent_qimf05006_txt');
	if (tqimf05006.length > 0) {
	    var tqimf05006Value = $('#MasterPage_MasterPageContent_qimf05006_txt').val().trim();
	    if (tqimf05006Value.length == 0) {
	        //欄位不允許空白 !
	        tErr += '「' + getI18NForSpecial('FD', 'QIMF05', 'qimf05006', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
	    }
	}
	//不允許空白驗證
	var tqimf05009 = $('#MasterPage_MasterPageContent_qimf05009_txt');
	if (tqimf05009.length > 0) {
	    var tqimf05009Value = $('#MasterPage_MasterPageContent_qimf05009_txt').val().trim();
	    if (tqimf05009Value.length == 0) {
	        //欄位不允許空白 !
	        tErr += '「' + getI18NForSpecial('FD', 'QIMF05', 'qimf05009', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
	    }
	}
	//不允許空白驗證
	var tqimf05010 = $('#MasterPage_MasterPageContent_qimf05010_txt');
	if (tqimf05010.length > 0) {
	    var tqimf05010Value = $('#MasterPage_MasterPageContent_qimf05010_txt').val().trim();
	    if (tqimf05010Value.length == 0) {
	        //欄位不允許空白 !
	        tErr += '「' + getI18NForSpecial('FD', 'QIMF05', 'qimf05010', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
	    }
	}
	//不允許空白驗證
	var tqimf05011 = $('#MasterPage_MasterPageContent_qimf05011_txt');
	if (tqimf05011.length > 0) {
	    var tqimf05011Value = $('#MasterPage_MasterPageContent_qimf05011_txt').val().trim().replace(/\,/g, '');
	    if (tqimf05011Value.length == 0) {
	        //欄位不允許空白 !
	        tErr += '「' + getI18NForSpecial('FD', 'QIMF05', 'qimf05011', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
	    }
	} 
	//不允許空白驗證
	var tqimf05012 = $('#MasterPage_MasterPageContent_qimf05012_txt');
	if (tqimf05012.length > 0) {
	    var tqimf05012Value = $('#MasterPage_MasterPageContent_qimf05012_txt').val().trim();
	    if (tqimf05012Value.length == 0) {
	        //欄位不允許空白 !
	        tErr += '「' + getI18NForSpecial('FD', 'QIMF05', 'qimf05012', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
	    }
	}
	//不允許空白驗證
	var tqimf05013 = $('#MasterPage_MasterPageContent_qimf05013_txt');
	if (tqimf05013.length > 0) {
	    var tqimf05013Value = $('#MasterPage_MasterPageContent_qimf05013_txt').val().trim();
	    if (tqimf05013Value.length == 0) {
	        //欄位不允許空白 !
	        tErr += '「' + getI18NForSpecial('FD', 'QIMF05', 'qimf05013', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
	    }
	}
	//不允許空白驗證
	var tqimf05017 = $('#MasterPage_MasterPageContent_qimf05017_txt');
	if (tqimf05017.length > 0) {
	    var tqimf05017Value = $('#MasterPage_MasterPageContent_qimf05017_txt').val().trim().replace(/\,/g, '');
	    if (tqimf05017Value.length == 0) {
	        //欄位不允許空白 !
	        tErr += '「' + getI18NForSpecial('FD', 'QIMF05', 'qimf05017', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
	    }
	}
	//不允許空白驗證
	var tqimf05018 = $('#MasterPage_MasterPageContent_qimf05018_txt');
	if (tqimf05018.length > 0) {
	    var tqimf05018Value = $('#MasterPage_MasterPageContent_qimf05018_txt').val().trim().replace(/\,/g, '');
	    if (tqimf05018Value.length == 0) {
	        //欄位不允許空白 !
	        tErr += '「' + getI18NForSpecial('FD', 'QIMF05', 'qimf05018', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
	    }
	} //不允許空白驗證
	var tqimf05019 = $('#MasterPage_MasterPageContent_qimf05019_txt');
	if (tqimf05019.length > 0) {
	    var tqimf05019Value = $('#MasterPage_MasterPageContent_qimf05019_txt').val().trim().replace(/\,/g, '');
	    if (tqimf05019Value.length == 0) {
	        //欄位不允許空白 !
	        tErr += '「' + getI18NForSpecial('FD', 'QIMF05', 'qimf05019', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
	    }
	}	

    //^_^20190828 edit by 06475 lijyun 將數值三位撇取消↓
//	var qimf05010 = $('#MasterPage_MasterPageContent_qimf05010_txt').val().replace(/\,/g, '');
//	$('#MasterPage_MasterPageContent_qimf05010_txt').val(parseFloat(qimf05010));
//	var qimf05017 = $('#MasterPage_MasterPageContent_qimf05017_txt').val().replace(/\,/g, '');
//	$('#MasterPage_MasterPageContent_qimf05017_txt').val(parseFloat(qimf05017));
//	var qimf05018 = $('#MasterPage_MasterPageContent_qimf05018_txt').val().replace(/\,/g, '');
//	$('#MasterPage_MasterPageContent_qimf05018_txt').val(parseFloat(qimf05018));
//	var qimf05019 = $('#MasterPage_MasterPageContent_qimf05019_txt').val().replace(/\,/g, '');
//	$('#MasterPage_MasterPageContent_qimf05019_txt').val(parseFloat(qimf05019));
	//var qimf05020 = $('#MasterPage_MasterPageContent_qimf05020_txt').val().replace(/\,/g, '');
	//$('#MasterPage_MasterPageContent_qimf05020_txt').val(parseFloat(qimf05020));
	//var qimf05029 = $('#MasterPage_MasterPageContent_qimf05029_txt').val().replace(/\,/g, '');
	//$('#MasterPage_MasterPageContent_qimf05029_txt').val(parseFloat(qimf05029));
    //^_^20190828 edit by 06475 lijyun 將數值三位撇取消↑

	if (tErr == "")
	{
		return true;
	}
	else
	{
		alert(tErr);
		return false;
	}
}


//2013/02/04:3.5.1.48:hiro:S00-20120626008:雙檔表單簽核鈕(發單、准、同意、會辦)增加單身驗證功能↓
//單頭表單簽核鈕驗證單身全部欄位
function CustomerSaveCheck_DetailAllData(pFormId, pUniversalId)
{
	var tErr = "";

	

	if (tErr == "")
	{
		return true;
	}
	else
	{
		alert(tErr);
		return false;
	}
}
//2013/02/04:3.5.1.48:hiro:S00-20120626008:雙檔表單簽核鈕(發單、准、同意、會辦)增加單身驗證功能↑


//單身自訂驗證
//2013/02/04:3.5.1.48:hiro:S00-20120626008:雙檔表單簽核鈕(發單、准、同意、會辦)增加單身驗證功能↓
function CustomerSaveCheck_Body(tStatus)
//2013/02/04:3.5.1.48:hiro:S00-20120626008:雙檔表單簽核鈕(發單、准、同意、會辦)增加單身驗證功能↑
{
	var tErr = "";
	var tMsg = "";
	var tFieldNotFilledMsg = getI18NForSpecial('PSMSG', 'Validation', 'RequriedFieldNotFilled', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	var tIntErrMsg = getI18NForSpecial('PSMSG', 'Validation', 'IntErrMsg', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	var tFloatErrMsg = getI18NForSpecial('PSMSG', 'Validation', 'FloatErrMsg', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	var tDecimalErrMsg = getI18NForSpecial('PSMSG', 'Validation', 'DecimalErrMsg', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	if (tStatus == "CREATE")
	{
		//填表時要驗證

	}
	else if (tStatus == "APPROVE")
	{
		//簽核時要驗證

	}

	//填表及簽核都要驗證


	if (tErr == "")
	{
		return true;
	}
	else
	{
		alert(tErr);
		return false;
	}
}

//2010/06/01:3.2.1.13:hiro:S00-20100323002:功能新增：欄位計算、單身資料加總↓
String.prototype.trim = function () {
	return this.replace(/^\s+|\s+$/g, "");
}
//2010/06/01:3.2.1.13:hiro:S00-20100323002:功能新增：欄位計算、單身資料加總↑

//填表時顯示提示字串
function InitOpenShowMSG(){
	alert('');
}

//2015/09/14;3.7.3.19;hiro;V00-20150914002;修正初始欄位計算、初始觸發必填、初始觸發連動開窗、初始觸發連動下拉等功能↓
////2010/06/01:3.2.1.15:hiro:S00-20100323002:功能新增：新增CheckBox或RadioButton觸發必填TextBox元件↓
//function InitVisiable()
//{
//tInitVisiable
//}
////2010/06/01:3.2.1.15:hiro:S00-20100323002:功能新增：新增CheckBox或RadioButton觸發必填TextBox元件↑
function InitTriggerMust(){

}

function InitTriggerOpen(){

}

function InitCalculated(){

}
//2015/09/14;3.7.3.19;hiro;V00-20150914002;修正初始欄位計算、初始觸發必填、初始觸發連動開窗、初始觸發連動下拉等功能↑

//2011/01/25:3.2.1.20:hiro:S00-20101005001:新增連動式下拉選單控制項↓
function InitOnChangeItem()
{

}

function CreateOption(pValue,pText,objselect)
{
	var new_option = new Option(pText,pValue);
	objselect.options.add(new_option);
}


//2011/01/25:3.2.1.20:hiro:S00-20101005001:新增連動式下拉選單控制項↑

//2013/06/07:3.6.1.4:hiro:S00-20130401009:增加數值自動轉換大寫金額格式↓
function InitNumberToWord()
{

}

function getMoneyWord(pNumberContrlID, pDecimalPlaces, pWordControlID)
{
	var strErr="";
	if($('#MasterPage_MasterPageContent_'+pNumberContrlID+'_txt').length>0){
		var tControlNumValue = $('#MasterPage_MasterPageContent_'+pNumberContrlID+'_txt').val().trim();
		if(tControlNumValue.length>0){
			if(isNaN(tControlNumValue)) {
				//請輸入數值!
				strErr = getI18NForSpecial('PSMSG','NumsCheck','NumsCheckMSG001','../../../src/_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
			}
			else{
				//這裡使用者如果輸入超過16進位的數值，就會失真！
				//tControlNumValue = parseFloat(tControlNumValue).toFixed(pDecimalPlaces);
				tControlNumValue = tw.com.dsc.easyflowDotNet.forms.QIMF05.ajaxGetFixedNum(tControlNumValue, pDecimalPlaces).value;

				$('#MasterPage_MasterPageContent_'+pNumberContrlID+'_txt').val(tControlNumValue);
				var iIntegerSTR="";
				var tDecimalSTR="";
				if(pDecimalPlaces>0){
					//含小數位
					var aryControlNumValue = tControlNumValue.toString().split('.');
					iIntegerSTR = parseInt(aryControlNumValue[0]);
					tDecimalSTR = aryControlNumValue[1];
				}
				else{
					iIntegerSTR = tControlNumValue;
				}

				//if(iIntegerSTR>=10000000000000000 || iIntegerSTR<=-9999999999999999)
				if(iIntegerSTR<0){
					if(iIntegerSTR.toString().length>17)
						//數值溢位!請輸入較大的數值!
						strErr = getI18NForSpecial('Message','NumsCheck','NumsOverRangMSG001','../../../src/_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
				}
				else{
					if(iIntegerSTR.toString().length>16)
						//數值溢位!請輸入較小的數值!
						strErr = getI18NForSpecial('Message','NumsCheck','NumsOverRangMSG002','../../../src/_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
				}
			}

			if(strErr!=""){
				alert(strErr);
				$('#MasterPage_MasterPageContent_'+pNumberContrlID+'_txt').val("");
				$('#MasterPage_MasterPageContent_'+pWordControlID+'_txt').val("");
				return false;
			}

			var tControlWordValue = tw.com.dsc.easyflowDotNet.forms.QIMF05.ajaxGetMoneyWord(tControlNumValue).value;
			$('#MasterPage_MasterPageContent_'+pWordControlID+'_txt').val(tControlWordValue);
		}
		//2015/09/14;3.7.3.19;hiro;V00-20150914007;修正數值轉大寫，數值為空白時，沒有一併清空轉大寫欄位↓
		else {
			$('#MasterPage_MasterPageContent_'+pWordControlID+'_txt').val("");
		}
		//2015/09/14;3.7.3.19;hiro;V00-20150914007;修正數值轉大寫，數值為空白時，沒有一併清空轉大寫欄位↑
	}
	return true;
}
//2013/06/07:3.6.1.4:hiro:S00-20130401009:增加數值自動轉換大寫金額格式↑

//2012/06/04:3.5.1.1:hiro:S00-20120214003:員工開窗改為唯讀，避免手動key入離職員工(暫緩)↓
function InitReadOnly()
{

}
//2012/06/04:3.5.1.1:hiro:S00-20120214003:員工開窗改為唯讀，避免手動key入離職員工(暫緩)↑


function SetCustomSubject()
{
	//使用者自訂主旨start
	var tSubjectVal='';
	var tSubjectTxt=document.getElementById("MasterPage_txtCreateToolSubject_txt").value;
	var tSubjectSelf = '';
	var tTitle = getI18NForSpecial('FD', 'QIMF05', 'HeadTabStrip01', '../../../src/_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');//檢查記錄表
    //^_^ 20190822 edit by 06475 lijyun DSCBV0972A_38_0001↓
	tSubjectTxt += $("#MasterPage_MasterPageContent_qimf05005_txt").val() + "(" + $("#MasterPage_MasterPageContent_qimf05009_txt").val() + ")";
    //^_^ 20190822 edit by 06475 lijyun DSCBV0972A_38_0001↑
	tSubjectVal=tSubjectTxt;
	//使用者自訂主旨end

	$("#MasterPage_txtCreateToolSubject_txt").val(tSubjectVal);
}


//2012/11/28:3.5.1.34:hiro:S00-20120321002:1.增加日期、日期時間計算功能。↓
function CheckCompareDate(pStartID, pEndID, pCompareType)
{
	if ($("#MasterPage_MasterPageContent_"+pStartID+"_txt").length>0 && $("#MasterPage_MasterPageContent_"+pEndID+"_txt").length>0){
		var tStartDateTime = $("#MasterPage_MasterPageContent_"+pStartID+"_txt").val();
		var tEndDateTime = $("#MasterPage_MasterPageContent_"+pEndID+"_txt").val();
		if(tStartDateTime!="" && tEndDateTime!=""){
			//2013/04/16:3.5.1.60:hiro:S00-20130329001:修改日期計算，天數相減計算結果加1↓
			//if(tEndDateTime<=tStartDateTime){
			//	var strErr=""
			//	if(pCompareType=="yyyyMMdd")
			//		strErr = getI18NForSpecial('Message','Common','MsgDateTimeError01','../../../src/_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
			//	else if(pCompareType=="HHmm")
			//		strErr = getI18NForSpecial('Message','Common','MsgDateTimeError02','../../../src/_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
			//	alert(strErr);
			//	$("#MasterPage_MasterPageContent_"+pEndID+"_txt").val("");
			//	return false;
			//}
			var strErr=""
			if(pCompareType=="yyyyMMdd"){
				if(tEndDateTime<tStartDateTime)
					strErr = getI18NForSpecial('Message','Common','MsgDateTimeError01','../../../src/_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
			}
			else if(pCompareType=="HHmm"){
				//2014/07/22;3.7.1.13;hiro;S00-20140627009;時間計算功能修改為可以同時間相減↓
				//if(tEndDateTime<=tStartDateTime)
				if(tEndDateTime<tStartDateTime){
				//2014/07/22;3.7.1.13;hiro;S00-20140627009;時間計算功能修改為可以同時間相減↑
					strErr = getI18NForSpecial('Message','Common','MsgDateTimeError02','../../../src/_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
				}
			}

			if(strErr!=""){
				alert(strErr);
				$("#MasterPage_MasterPageContent_"+pEndID+"_txt").val("");
				return false;
			}
			//2013/04/16:3.5.1.60:hiro:S00-20130329001:修改日期計算，天數相減計算結果加1↑
			return true;
		}
	}
	return false;
}
//2012/11/28:3.5.1.34:hiro:S00-20120321002:1.增加日期、日期時間計算功能。↑

//2013/01/24:3.5.1.43:hiro:S00-20130109001:雙檔作業的單身，支援組合多選開窗。↓
function setSelectPanelValue()
{
	var aryFields = [];//單頭、單身多選開窗
	var intFieldsLength = aryFields.length;
	for(var i=0;i<intFieldsLength;i++){
		var tField=aryFields[i];
		if($('#MasterPage_MasterPageContent_DscOpenQuery'+tField+'_txt').length>0){
			var hdnValue = $('#MasterPage_MasterPageContent_DscOpenQuery'+tField+'_txt').val();
			$('#MasterPage_MasterPageContent_SelectPanel'+tField+'_hidText').val(hdnValue);
			$('#MasterPage_MasterPageContent_SelectPanel'+tField+'_hidText2').val(hdnValue);

			if($('#MasterPage_MasterPageContent_SelectPanel'+tField+'_lst').length>0){
				$('#MasterPage_MasterPageContent_SelectPanel'+tField+'_lst')[0].options.length=0;

				//2014/07/21;Joseph(hiro代);跨裝置支援Listbox多選開窗(限Platform 2.2.36.24↑)↓
				if($('#MasterPage_MasterPageContent_SelectPanel'+tField+'_lstTbx').length>0){
					$('#MasterPage_MasterPageContent_SelectPanel'+tField+'_lstTbx').val("");
				}
				//2014/07/21;Joseph(hiro代);跨裝置支援Listbox多選開窗(限Platform 2.2.36.24↑)↑

				if(hdnValue.length>0){
					var aryHdnFieldSplit = hdnValue.split('§');
					var intHdnFieldSplitLength = aryHdnFieldSplit.length;
					for (var j = 0; j < intHdnFieldSplitLength; j++){
						var tShowItem = aryHdnFieldSplit[j];
						tShowItem=tShowItem.replace(/┼┼/g, " ");
						var new_option = new Option(tShowItem, tShowItem);
						$('#MasterPage_MasterPageContent_SelectPanel'+tField+'_lst')[0].options.add(new_option);

						//2014/07/21;Joseph(hiro代);跨裝置支援Listbox多選開窗(限Platform 2.2.36.24↑)↓
						if($('#MasterPage_MasterPageContent_SelectPanel'+tField+'_lstTbx').length>0){
							document.getElementById('MasterPage_MasterPageContent_SelectPanel' + tField + '_lstTbx').value += tShowItem;
							if (j != intHdnFieldSplitLength - 1)
							{
								document.getElementById('MasterPage_MasterPageContent_SelectPanel' + tField + '_lstTbx').value += '\r\n';
							}
						}
						//2014/07/21;Joseph(hiro代);跨裝置支援Listbox多選開窗(限Platform 2.2.36.24↑)↑
					}
				}
			}
		}
	}
}
//2013/01/24:3.5.1.43:hiro:S00-20130109001:雙檔作業的單身，支援組合多選開窗。↑

//2013/06/25:3.6.1.7:hiro:S00-20130621001:1.多選TEXT開窗改為唯讀，需配合Platform[2.2.34.53]以上版本。↓
////2010/06/01:3.2.1.13:hiro:S00-20100323002:功能新增：新增人員、日期、部門(含多選開窗)元件↓
//function getMultiOpenWindowValues(setField)
//{
//	if(document.getElementById("MasterPage_MasterPageContent_edReceiver_txt")!=null && document.getElementById("MasterPage_MasterPageContent_edReceiver_txt").value != null && document.getElementById("MasterPage_MasterPageContent_edReceiver_txt").value != "")
//	{
//		var tValueA = unescape(document.getElementById("MasterPage_MasterPageContent_edReceiver_txt").value);
//		//2011/06/07:3.3.1.1:hiro:Q00-20110607001:修正人員多選開窗物件，應僅帶回人員工號-人員姓名，不應呈現人員工號-人員姓名-部門代號-部門名稱↓
//		//document.getElementById("MasterPage_MasterPageContent_"+setField).value = tValueA.replace(/├/g,";").replace(/§/g,"-");
//		document.getElementById("MasterPage_MasterPageContent_"+setField).value="";
//		var tArr1 = tValueA.split("├");
//		var tArr2 = new Array();
//		for (var i = 0; i < tArr1.length; i++) {
//			if (tArr1[i] != "") {
//				tArr2 = tArr1[i].split("§");
//				//2011/12/12:3.3.3.11:hiro:S00-20111212002:表單精靈NewOpenQuery控制項，多選開窗的儲存格式請修改成empl、dept控制項的多選開窗儲存格式↓
//				//document.getElementById("MasterPage_MasterPageContent_"+setField).value += tArr2[0] + "-" + tArr2[1] + ";";
//				//MI回傳值1個以上時，僅顯示第1、2個MI回傳值
//				if(tArr2.length>1)
//					document.getElementById("MasterPage_MasterPageContent_"+setField).value += tArr2[0] + "-" + tArr2[1] + ";";
//				else
//					document.getElementById("MasterPage_MasterPageContent_"+setField).value += tArr2[0] + ";";
//				//2011/12/12:3.3.3.11:hiro:S00-20111212002:表單精靈NewOpenQuery控制項，多選開窗的儲存格式請修改成empl、dept控制項的多選開窗儲存格式↑
//			}
//		}
//		//2011/06/07:3.3.1.1:hiro:Q00-20110607001:修正人員多選開窗物件，應僅帶回人員工號-人員姓名，不應呈現人員工號-人員姓名-部門代號-部門名稱↑
//		document.getElementById("MasterPage_MasterPageContent_edReceiver_txt").value = "";
//	}
//}
////2010/06/01:3.2.1.13:hiro:S00-20100323002:功能新增：新增人員、日期、部門(含多選開窗)元件↑
function getMultiOpenWindowValues(setField)
{
	if (event.returnValue != false && document.getElementById("MasterPage_MasterPageContent_edReceiver_txt")!=null)
	{
		var tValueA = unescape(document.getElementById("MasterPage_MasterPageContent_edReceiver_txt").value);
		//2011/06/07:3.3.1.1:hiro:Q00-20110607001:修正人員多選開窗物件，應僅帶回人員工號-人員姓名，不應呈現人員工號-人員姓名-部門代號-部門名稱↓
		//document.getElementById("MasterPage_MasterPageContent_"+setField).value = tValueA.replace(/├/g,";").replace(/§/g,"-");
		document.getElementById("MasterPage_MasterPageContent_"+setField).value="";
		var tArr1 = tValueA.split("├");
		var tArr2 = new Array();
		for (var i = 0; i < tArr1.length; i++) {
			if (tArr1[i] != "") {
				tArr2 = tArr1[i].split("§");
				//2011/12/12:3.3.3.11:hiro:S00-20111212002:表單精靈NewOpenQuery控制項，多選開窗的儲存格式請修改成empl、dept控制項的多選開窗儲存格式↓
				//document.getElementById("MasterPage_MasterPageContent_"+setField).value += tArr2[0] + "-" + tArr2[1] + ";";
				//MI回傳值1個以上時，僅顯示第1、2個MI回傳值
				if(tArr2.length>1)
					document.getElementById("MasterPage_MasterPageContent_"+setField).value += tArr2[0] + "-" + tArr2[1] + ";";
				else
					document.getElementById("MasterPage_MasterPageContent_"+setField).value += tArr2[0] + ";";
				//2011/12/12:3.3.3.11:hiro:S00-20111212002:表單精靈NewOpenQuery控制項，多選開窗的儲存格式請修改成empl、dept控制項的多選開窗儲存格式↑
			}
		}
		//2011/06/07:3.3.1.1:hiro:Q00-20110607001:修正人員多選開窗物件，應僅帶回人員工號-人員姓名，不應呈現人員工號-人員姓名-部門代號-部門名稱↑
		document.getElementById("MasterPage_MasterPageContent_edReceiver_txt").value = "";
	}
}
//2013/06/25:3.6.1.7:hiro:S00-20130621001:1.多選TEXT開窗改為唯讀，需配合Platform[2.2.34.53]以上版本。↑

//2014/12/30;3.7.3.3;hiro;S00-20141225002;派送表單功能強化↓
function jsDoDispatch(pFormID, pSheetNo, pDispatchFormID){
	//若您已有編輯此表單資料, 此動作會清除您所編輯的資料! [請問是否繼續?
	var tConfirmSTR = getI18NForSpecial('FD','EFBaseMasterPage','EFMsgBoxJS007','../../../src/_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	if(window.confirm(tConfirmSTR.split('[')[0].toString() + "\r\n\r\n" + tConfirmSTR.split('[')[1].toString())){
		var bResult = tw.com.dsc.easyflowDotNet.forms.QIMF05.ajaxDoDispatchForm(pFormID, pSheetNo, pDispatchFormID).value;
		var tDispatchFormResult="";
		if(bResult){
			//執行派送表單成功!
			tDispatchFormResult=getI18NForSpecial('Message','EFWizardForm','DispatchFormSuccess','../../../src/_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
			alert(tDispatchFormResult);
			//Refresh 原頁面避免 Session 錯亂
			location.reload();
		}
		else{
			//執行派送表單失敗!
			tDispatchFormResult=getI18NForSpecial('Message','EFWizardForm','DispatchFormFail','../../../src/_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
			alert(tDispatchFormResult);
		}
	}
}
//2014/12/30;3.7.3.3;hiro;S00-20141225002;派送表單功能強化↑

//^_^ 20190822 edit by 06475 lijyun DSCBV0972A_38_0001↓
//公司別下拉選項改變
function Companychange() {
    var companyid = document.getElementById("MasterPage_MasterPageContent_" + gField_companyid + "_ddl");
    if (companyid.value.trim() != "") {
        OEMShowMaskDiv(); //打開遮罩防止USER一值輸入
        window.location.href = window.location.href.substring(0, window.location.href.indexOf("?", 0)) + "?Company=" + companyid.value.trim();
    }
}

//選擇製程代號後帶入維護作業RESAI001的圖片一ai04、圖片二ai05、圖片三ai06
function getImg() {
    var UniID = document.getElementById("MasterPage_universalID").value;
    var qimf05026 = document.getElementById("MasterPage_MasterPageContent_qimf05026_txt"); //圖面一
    var qimf05027 = document.getElementById("MasterPage_MasterPageContent_qimf05027_txt"); //圖面二
    var qimf05028 = document.getElementById("MasterPage_MasterPageContent_qimf05028_txt"); //圖面三
    var qimf05006 = document.getElementById("MasterPage_MasterPageContent_qimf05006_txt"); //品號
    var qimf05015 = document.getElementById("MasterPage_MasterPageContent_qimf05015_txt"); //檢驗版本
    var companyid = document.getElementById("MasterPage_MasterPageContent_" + gField_companyid + "_ddl"); //公司別
    var qimf05004 = document.getElementById("MasterPage_MasterPageContent_qimf05004_txt"); //製程代號

    //圖面一
	if (qimf05026 != null && qimf05026.value != "") {
		var tRet = tw.com.dsc.easyflowDotNet.forms.QIMF05.LoadQIMF05IMG(qimf05026.value, "Drawing1", UniID).value;
        if (tRet != "") {
            var aryRet = tRet.split('§');
            if (aryRet[0] == "Y" && aryRet[1] != "") {
				document.getElementById("MasterPage_MasterPageContent_imgqimf05026").style.display = "";
				document.getElementById("MasterPage_MasterPageContent_imgqimf05026").src = aryRet[1];
            }
            else {
				document.getElementById("MasterPage_MasterPageContent_imgqimf05026").style.display = "none";
                alert(aryRet[1]);
            }
        } else {
			document.getElementById("MasterPage_MasterPageContent_imgqimf05026").style.display = "none";
        }
    }
    else {
		document.getElementById("MasterPage_MasterPageContent_imgqimf05026").style.display = "none";
    }

    //圖面二
    if (qimf05027 != null && qimf05027.value != "") {
        var tRet = tw.com.dsc.easyflowDotNet.forms.QIMF05.LoadQIMF05IMG(qimf05027.value, "Drawing2", UniID).value;
        if (tRet != "") {
            var aryRet = tRet.split('§');
            if (aryRet[0] == "Y" && aryRet[1] != "") {
                document.getElementById("MasterPage_MasterPageContent_imgqimf05027").style.display = "";
                document.getElementById("MasterPage_MasterPageContent_imgqimf05027").src = aryRet[1];
            }
            else {
                document.getElementById("MasterPage_MasterPageContent_imgqimf05027").style.display = "none";
                alert(aryRet[1]);
            }
        } else {
            document.getElementById("MasterPage_MasterPageContent_imgqimf05027").style.display = "none";
        }
    }
    else {
        document.getElementById("MasterPage_MasterPageContent_imgqimf05027").style.display = "none";
    }

    //圖面三
    if (qimf05028 != null && qimf05028.value != "") {
        var tRet = tw.com.dsc.easyflowDotNet.forms.QIMF05.LoadQIMF05IMG(qimf05028.value, "Drawing3", UniID).value;
        if (tRet != "") {
            var aryRet = tRet.split('§');
            if (aryRet[0] == "Y" && aryRet[1] != "") {
                document.getElementById("MasterPage_MasterPageContent_imgqimf05028").style.display = "";
                document.getElementById("MasterPage_MasterPageContent_imgqimf05028").src = aryRet[1];
            }
            else {
                document.getElementById("MasterPage_MasterPageContent_imgqimf05028").style.display = "none";
                alert(aryRet[1]);
            }
        } else {
            document.getElementById("MasterPage_MasterPageContent_imgqimf05028").style.display = "none";
        }
    }
    else {
        document.getElementById("MasterPage_MasterPageContent_imgqimf05028").style.display = "none";
    }

    //抽樣計畫表
    if (companyid != null && companyid.value != "" && qimf05006 != null && qimf05006.value != ""
        && qimf05015 != null && qimf05015.value != "" && qimf05004 != null && qimf05004.value != "") {
        var tRet = tw.com.dsc.easyflowDotNet.forms.QIMF05.LoadSamplingPlanIMG(companyid.value, qimf05006.value, qimf05015.value, qimf05004.value, UniID).value;
        if (tRet != "") {
            var aryRet = tRet.split('§');
            if (aryRet[0] == "Y" && aryRet[1] != "") {
                document.getElementById("MasterPage_MasterPageContent_imgSamplingPlan").style.display = "";
                document.getElementById("MasterPage_MasterPageContent_imgSamplingPlan").src = aryRet[1];
            }
            else {
                document.getElementById("MasterPage_MasterPageContent_imgSamplingPlan").style.display = "none";
                alert(aryRet[1]);
            }
        } else {
            document.getElementById("MasterPage_MasterPageContent_imgSamplingPlan").style.display = "none";
        }
    }
    else {
        document.getElementById("MasterPage_MasterPageContent_imgSamplingPlan").style.display = "none";
    }
}

function qimf05005_onblur() {
    document.getElementById("MasterPage_MasterPageContent_qimf05006_txt").onchange();
    document.getElementById("MasterPage_MasterPageContent_qimf05006_txt").onblur();
}

var obj_return;//JSON字串
var json_checkdata;//JSNO物件

function LoadJSONObject(tStatus) {
    var qimf05001 = document.getElementById("MasterPage_MasterPageContent_qimf05001_txt");//表單代號
    var qimf05002 = document.getElementById("MasterPage_MasterPageContent_qimf05002_txt");//表單單號
    var qimf05006 = document.getElementById("MasterPage_MasterPageContent_qimf05006_txt");//料號
    var qimf05015 = document.getElementById("MasterPage_MasterPageContent_qimf05015_txt");//檢驗版本
    var qimf05017 = document.getElementById("MasterPage_MasterPageContent_qimf05017_txt"); //抽樣數
    var qimf05004 = document.getElementById("MasterPage_MasterPageContent_qimf05004_txt"); //製程代號
    var companyid = document.getElementById("MasterPage_MasterPageContent_" + gField_companyid + "_ddl"); //公司別
    
    if (qimf05006 != null && qimf05006.value != "" && qimf05015 != null && qimf05015.value != "" && qimf05004 != null && qimf05004.value != "") {
        //先判斷是否有未完成的檢驗資料，取得檢驗資料
        obj_return = tw.com.dsc.easyflowDotNet.forms.QIMF05.ajaxLoadJSON([qimf05006.value, qimf05015.value, qimf05017.value, qimf05004.value, companyid.value, qimf05001.value, qimf05002.value]);
        if (obj_return.value != "") {
            document.getElementById("MasterPage_MasterPageContent_JSONObject_txt").value = obj_return.value;
            json_checkdata = $.parseJSON(obj_return.value);
            DarwingCheckData(tStatus);
            OEMDisplayOnOff("On", "lblMsg");
        }
        else {
            OEMDisplayOnOff("Off", "lblMsg");
        }
        
    }
}

//產生檢驗資料
function DarwingCheckData(tStatus) {
    var tqimf05d003 = getI18NForSpecial('FD', 'QIMF05_d01', 'NO', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');//檢驗項目序號
    var tqimf05d004 = getI18NForSpecial('FD', 'QIMF05_d01', 'qimf05d003', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');//檢驗項目
    var tqimf05d005 = getI18NForSpecial('FD', 'QIMF05_d01', 'qimf05d004', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');//檢驗說明
	var tqimf05d006 = getI18NForSpecial('FD', 'QIMF05_d01', 'qimf05d006', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');//檢驗結果
	var tqimf05d010 = getI18NForSpecial('FD', 'QIMF05_d01', 'qimf05d010', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');//Min 
	var tqimf05d011 = getI18NForSpecial('FD', 'QIMF05_d01', 'qimf05d011', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');//Max
    var thint_img = "../../_Common/AppUtil/Themes/images/Form/imgImportant.gif";

    var qimf05006 = document.getElementById("MasterPage_MasterPageContent_qimf05006_txt");//料號
    var qimf05015 = document.getElementById("MasterPage_MasterPageContent_qimf05015_txt");//檢驗版本
    var qimf05017 = document.getElementById("MasterPage_MasterPageContent_qimf05017_txt");//抽樣數
    var qimf05004 = document.getElementById("MasterPage_MasterPageContent_qimf05004_txt");//製程代號
    var icount = parseInt(qimf05017.value);
    var div_checkdata = $("#tbDataCheck");
    div_checkdata.empty();

    //畫Table
    var row, cell, table, thead, tbody;
    table = $("<table>").attr("id", "tbCheckDataInfo").addClass("OEMGridviewStyle").addClass("OEMFormFont");
    row = $("<tr>").addClass("GridviewScrollHeader");
	cell = $("<td>").attr("rowspan", "2").addClass("OEMFormFont").text(tqimf05d003).css("height", "63px"); row.append(cell);
	cell = $("<td>").attr("rowspan", "2").addClass("OEMFormFont").addClass("OEMTableWidth").text(tqimf05d004); row.append(cell);

	cell = $("<td>").attr("rowspan", "2").addClass("OEMFormFont").text(tqimf05d005).addClass("OEMTableWidth").addClass("OEMTableWidth");
    row.append(cell);

	//^_^ 20201219 edit by 13768 yating DSCBV0972A_38_0004 ↓
	cell = $("<td>").attr("rowspan", "2").addClass("OEMFormFont").text(tqimf05d010).addClass("OEMTableWidth").addClass("OEMTableWidth");
	row.append(cell);

	cell = $("<td>").attr("rowspan", "2").addClass("OEMFormFont").text(tqimf05d011).addClass("OEMTableWidth").addClass("OEMTableWidth");

	row.append(cell);
	//^_^ 20201219 edit by 13768 yating DSCBV0972A_38_0004 ↑

    cell = $("<td>").attr("colspan", icount).addClass("OEMFormFont").text(tqimf05d006); row.append(cell);
    row.append(cell);
    table.append(row);
    row = $("<tr>").addClass("GridviewScrollHeader");

    for (var i = 0; i < icount; i++) {
        cell = $("<td>").addClass("OEMFormFont").addClass("OEMTextWidth").text(i + 1);
        row.append(cell);
    }

    table.append(row);
    var i = 1;
    var tRet = "";
    var aryRet;
    var tabindex = 130;
    var tType = "";
    var tMsg = "";
    $.each(json_checkdata, function (k, item) {
        tRet = "";
        row = $("<tr>").addClass("GridviewScrollItem");

        cell = $("<td>").text(item.no).addClass("OEMFormFont"); row.append(cell);
		cell = $("<td>").addClass("OEMTableWidth");
		cell.append($("<div>").text(item.testitem).attr("title", item.testitem).attr("tabindex", -1).addClass("OEMFormFont").addClass("OEMTextWidth").addClass("OEMMinWidth").addClass("OEMTextOverFlow"));
        row.append(cell);
        row.append(cell);
		cell = $("<td>").addClass("OEMTableWidth");
		cell.append($("<div>").text(item.testremark).attr("title", item.testremark).attr("tabindex", -1).addClass("OEMFormFont").addClass("OEMTextWidth").addClass("OEMMinWidth").addClass("OEMTextOverFlow"));
        row.append(cell);
		row.append(cell);

		//^_^ 20201219 edit by 13768 yating DSCBV0972A_38_0004 ↓
		cell = $("<td>");
		cell = $("<td>").text(item.min).attr("title", item.min).attr("tabindex", -1).addClass("OEMFormFont").addClass("OEMTextWidth").addClass("OEMTextOverFlow");
		row.append(cell);
		row.append(cell);

		cell = $("<td>").addClass("OEMTextWidth");
		cell = $("<td>").text(item.max).attr("title", item.max).attr("tabindex", -1).addClass("OEMFormFont").addClass("OEMTextWidth").addClass("OEMTextOverFlow");
		row.append(cell);
		row.append(cell);

		//^_^ 20201219 edit by 13768 yating DSCBV0972A_38_0004 ↑

        $.each(item.listcheckcount, function (j, checkitem) {
            cell = $("<td>").addClass("OEMTextWidth");
            if (checkitem.testresult == "Y") {
                tType = "O";//○
                cell.append($("<span>").attr("tabindex", tabindex + 1).text(tType));

            }
            else if (checkitem.testresult == "N") {
                tType = "△";
                cell.append($("<span>").attr("tabindex", tabindex + 1).text(tType));

            }
            else {
                tType = "X";//╳
                cell.append($("<span>").attr("tabindex", tabindex + 1).text(tType));

            }
            if (tType == "X") {
                if (checkitem.testBadReason != null && checkitem.testBadReason != "") {
                    tMsg = checkitem.testBadReason;
                }
                if (checkitem.testDesc != null && checkitem.testDesc != "") {

                    tMsg += checkitem.testDesc;
                }
                cell.append($("<img>").attr("src", thint_img).attr("title", tMsg).click(function () {
                    alert(tMsg);
                }));
            }
            else {
                if (checkitem.testDesc != null && checkitem.testDesc != "") {
                    cell.append($("<img>").attr("src", thint_img).attr("title", checkitem.testDesc).click(function () {
                        alert(checkitem.testDesc);
                    }));
                }
            }
            if ((checkitem.testBadReason == null || checkitem.testBadReason == "")
                && (checkitem.testDesc == null || checkitem.testDesc == "")) {
                cell.append($("<img>").css("width", "17px"));
            }
            tabindex++;
            row.append(cell);
        });

        table.append(row);
        i++;
    });

    div_checkdata.append(table);

    //Table欄位凍結事件
    $('#tbCheckDataInfo').gridviewScroll({
        width: 1200,
        height: 400,
        railcolor: "#F0F0F0",
        barcolor: "#F0F0F0",
        barhovercolor: "#F0F0F0",
        bgcolor: "#F0F0F0",
        freezesize: 2,
        arrowsize: 40,
        varrowtopimg: "../../_Common/OSE/images/arrowvt.png",
        varrowbottomimg: "../../_Common/OSE/images/arrowvb.png",
        harrowleftimg: "../../_Common/OSE/images/arrowhl.png",
        harrowrightimg: "../../_Common/OSE/images/arrowhr.png",
        railsize: 25,
        freezesize: 2,             //欄位凍結
        headerrowcount: 2          //標題凍結

    });
}

//點圖放大
function OpenImg(objImg) {
    var tStyle = "dialogHeight:600px;dialogWidth:900px;scrollbars=no;status=no;resizable=yes;";
    var strURL = $(objImg).attr('src');
    if (gIsIEBrowser) {
        window.showModalDialog(strURL, null, tStyle);
    }
    else {
        showDivDialog(strURL, '', 'dialogHeight:350px; dialogWidth:400px;', null, true);
    }
}
//^_^ 20190822 edit by 06475 lijyun DSCBV0972A_38_0001↑
﻿<%@ Page language="c#" CodeFile="ODMSCRPCN01.aspx.cs" MasterPageFile="~/src/_Common/AppUtil/EFMasterPage/EFBaseMasterPage.master" AutoEventWireup="false" enableEventValidation="false" Inherits="tw.com.dsc.easyflowDotNet.forms.ODMSCRPCN01" %>
<%@ Register TagPrefix="uc1" TagName="gridUserControl" Src="../../_Common/PlatformUtil/KernelPage/Grid/gridUserControl.ascx" %>
<%@ Register TagPrefix="iewc" Namespace="Microsoft.Web.UI.WebControls" Assembly="Microsoft.Web.UI.WebControls" %>
<%@ Register TagPrefix="cc1" Namespace="tw.com.dsc.dscDotNet.dscWebControls" Assembly="PlatformUtil" %>

<asp:Content ID="ODMSCRPCN01FormContent" ContentPlaceHolderID="MasterPageContent" runat="server">
	<!--單檔架構 -->
	<!--2009/03/19:Joseph:<div id="cover" style="OVERFLOW: auto; WIDTH: 100%;">-->
		<div id="cover" style="WIDTH: 100%;">
			<div id="createRecord" style="WIDTH: 100%; HEIGHT: 100%" runat="server">
				<cc1:DscPanel id="ecPnlMaster" runat="server" Width="98%" IniHTML='&#10;<div style="OVERFLOW: auto; WIDTH: 100%; POSITION: relative; HEIGHT: 100%" ms_positioning="GridLayout"></div>'
					FrmDefineKeys-FrmType="Query" FrmDefineKeys-FrmID="FrmODMSCRPCN01" FrmDefineKeys-BOID="ODMSCRPCN01"
					BorderStyle="None" BorderColor="Transparent" BorderWidth="0px" Height="519px">
					<!--單頭頁籤-->
					<iewc:TabStrip id="TabStrip1" runat="server" 
						TabDefaultStyle="background-image:url(../../_Common/AppUtil/Themes/images/Menu/Tbtn01.gif);" 
						TabHoverStyle="background-image:url(../../_Common/AppUtil/Themes/images/Menu/Tbtn01.gif);" 
						TabSelectedStyle="background-image:url(../../_Common/AppUtil/Themes/images/Menu/Tbtn02.gif);" 
						CssClass="divToolBar2" >
						<iewc:Tab ID='headDefault' Text='單頭頁籤1' DefaultStyle='width:100px; height:27px;vertical-align:middle; text-align:center;'></iewc:Tab>
					</iewc:TabStrip>
					<!--單頭頁籤畫面集合-->

					<!--單頭頁籤 一-->
					<cc1:Dscpanel id='divheadDefault' style='DISPLAY: block' runat='server' Width='100%' Height='519px' BackColor='Transparent'>
						<div class='TabPage' style='POSITION: relative; HEIGHT: 519px; left: 0px; top: 0px;' >
							<asp:ValidationSummary id='ValidationSummaryHead01' style='Z-INDEX: 100; POSITION: absolute; LEFT: 745px; TOP: 7px;' runat='server' ShowSummary='False' ShowMessageBox='True'></asp:ValidationSummary>
							<!--此區間放入單頭頁籤 一 的各個dsc元件-->

<cc1:DscTextBox id='odmscrpcn01001' runat='server' title='表單代號'
	style='display: none; Z-INDEX: 101; POSITION: absolute; LEFT: 245px; TOP: 16px;'
	TxtInput_TabIndex='0'>
	<INPUTSTYLE Width='120px'></INPUTSTYLE>
	<TITLESTYLE Width='110px'></TITLESTYLE>
	<FRMFIELDKEYS FrmID='FrmODMSCRPCN01' BOID='ODMSCRPCN01' FieldName='odmscrpcn01001'></FRMFIELDKEYS>
</cc1:DscTextBox>
<cc1:DscTextBox id='odmscrpcn01002' runat='server' title='表單單號'
	style='display: none; Z-INDEX: 102; POSITION: absolute; LEFT: 245px; TOP: 49px;'
	TxtInput_TabIndex='0'>
	<INPUTSTYLE Width='120px'></INPUTSTYLE>
	<TITLESTYLE Width='110px'></TITLESTYLE>
	<FRMFIELDKEYS FrmID='FrmODMSCRPCN01' BOID='ODMSCRPCN01' FieldName='odmscrpcn01002'></FRMFIELDKEYS>
</cc1:DscTextBox>

<cc1:DscLabel ID='label1' runat='server' Style="z-index:692; position: absolute; left: 203px; top: 403px; vertical-align:middle;font-family:'標楷體';font-size:12pt;" Text='是' Width='21px' Height='22px'></cc1:DscLabel>
<cc1:DscLabel ID='label2' runat='server' Style="z-index:691; position: absolute; left: 254px; top: 403px; vertical-align:middle;font-family:'標楷體';font-size:12pt;" Text='否' Width='21px' Height='22px'></cc1:DscLabel>
<cc1:DscDateAssistant2 ID='usedate' runat='server' Title='申請日期' ShowTitle='False'
	style="POSITION: absolute; left: 591px; top: 65px; z-index: 687;" 
	TxtInput_TabIndex='101' 
	DisplayMode='yyyyMMdd' DateSaveFormat='String' DateLan='ChristianEra' datePagePath='../../_Common/PlatformUtil/Resource/ASP/' 
	BtnVisible='True' ImgSrc='../../_Common/AppUtil/Themes/images/Program/calender.gif'>
	<InputStyle Width='112px' Height='25px' CssClass='Edit20' />
	<FrmFieldKeys FrmID='FrmODMSCRPCN01' BOID='ODMSCRPCN01' FieldName='usedate'></FrmFieldKeys>
</cc1:DscDateAssistant2>
<cc1:DscTextBox id='dept' runat='server' title='申請部門' ShowTitle='False'
	style="Z-INDEX:696; POSITION: absolute; LEFT: 145px; TOP: 106px;"
	TxtInput_TabIndex='102'>
	<FrmFieldKeys FrmID='FrmODMSCRPCN01' BOID='ODMSCRPCN01' FieldName='dept'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='100px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='username' runat='server' title='申請人' ShowTitle='False'
	style="Z-INDEX:689; POSITION: absolute; LEFT: 375px; TOP: 107px;"
	TxtInput_TabIndex='103'>
	<FrmFieldKeys FrmID='FrmODMSCRPCN01' BOID='ODMSCRPCN01' FieldName='username'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='100px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscDateAssistant2 ID='buydate' runat='server' Title='購置日期' ShowTitle='False'
	style="POSITION: absolute; left: 593px; top: 106px; z-index: 685;" 
	TxtInput_TabIndex='104' 
	DisplayMode='yyyyMMdd' DateSaveFormat='String' DateLan='ChristianEra' datePagePath='../../_Common/PlatformUtil/Resource/ASP/' 
	BtnVisible='True' ImgSrc='../../_Common/AppUtil/Themes/images/Program/calender.gif'>
	<InputStyle Width='93px' Height='25px' CssClass='Edit20' />
	<FrmFieldKeys FrmID='FrmODMSCRPCN01' BOID='ODMSCRPCN01' FieldName='buydate'></FrmFieldKeys>
</cc1:DscDateAssistant2>
<cc1:DscTextBox id='materialsno' runat='server' title='物料品號' ShowTitle='False'
	style="Z-INDEX:695; POSITION: absolute; LEFT: 145px; TOP: 156px;"
	TxtInput_TabIndex='105'>
	<FrmFieldKeys FrmID='FrmODMSCRPCN01' BOID='ODMSCRPCN01' FieldName='materialsno'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='111px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='materialname' runat='server' title='物料名稱' ShowTitle='False'
	style="Z-INDEX:690; POSITION: absolute; LEFT: 375px; TOP: 156px;"
	TxtInput_TabIndex='106'>
	<FrmFieldKeys FrmID='FrmODMSCRPCN01' BOID='ODMSCRPCN01' FieldName='materialname'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='110px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='location' runat='server' title='存放位置' ShowTitle='False'
	style="Z-INDEX:686; POSITION: absolute; LEFT: 593px; TOP: 155px;"
	TxtInput_TabIndex='107'>
	<FrmFieldKeys FrmID='FrmODMSCRPCN01' BOID='ODMSCRPCN01' FieldName='location'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='117px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='materialspec' runat='server' title='物料規格' ShowTitle='False'
	style="Z-INDEX:694; POSITION: absolute; LEFT: 145px; TOP: 203px;"
	TxtInput_TabIndex='108' TextMode='MultiLine'>
	<FrmFieldKeys FrmID='FrmODMSCRPCN01' BOID='ODMSCRPCN01' FieldName='materialspec'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='174px' Height='35px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='scrpqty' runat='server' title='報廢數量' ShowTitle='False'
	style="Z-INDEX:688; POSITION: absolute; LEFT: 423px; TOP: 207px;"
	TxtInput_TabIndex='109'>
	<FrmFieldKeys FrmID='FrmODMSCRPCN01' BOID='ODMSCRPCN01' FieldName='scrpqty'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='95px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='assprice' runat='server' title='資產價格' ShowTitle='False'
	style="Z-INDEX:684; POSITION: absolute; LEFT: 621px; TOP: 207px;"
	TxtInput_TabIndex='110'>
	<FrmFieldKeys FrmID='FrmODMSCRPCN01' BOID='ODMSCRPCN01' FieldName='assprice'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='90px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='scrpreason' runat='server' title='報廢原因' ShowTitle='False'
	style="Z-INDEX:697; POSITION: absolute; LEFT: 145px; TOP: 261px;"
	TxtInput_TabIndex='111' TextMode='MultiLine'>
	<FrmFieldKeys FrmID='FrmODMSCRPCN01' BOID='ODMSCRPCN01' FieldName='scrpreason'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='554px' Height='125px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<div style="display:none;">
<cc1:DscTextBox id='userid' runat='server' title='填表人ID' ShowTitle='False'
	style="Z-INDEX:699; POSITION: absolute; LEFT: 25px; TOP: 5px;"
	TxtInput_TabIndex='113'>
	<FrmFieldKeys FrmID='FrmODMSCRPCN01' BOID='ODMSCRPCN01' FieldName='userid'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='91px' Height='22px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
</div>
<div style="display:none;">
<cc1:DscTextBox id='superid' runat='server' title='填表人直屬主管' ShowTitle='False'
	style="Z-INDEX:700; POSITION: absolute; LEFT: 22px; TOP: 30px;"
	TxtInput_TabIndex='114'>
	<FrmFieldKeys FrmID='FrmODMSCRPCN01' BOID='ODMSCRPCN01' FieldName='superid'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='93px' Height='22px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
</div>
<cc1:DscTextBox id='outprice' runat='server' title='外圍資產價格' ShowTitle='False'
	style="Z-INDEX:683; POSITION: absolute; LEFT: 621px; TOP: 207px;"
	TxtInput_TabIndex='116'>
	<FrmFieldKeys FrmID='FrmODMSCRPCN01' BOID='ODMSCRPCN01' FieldName='outprice'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='90px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='rditem' runat='server' title='生產材料類' ShowTitle='False'
	style="display:none;Z-INDEX:693; POSITION: absolute; LEFT: 81px; TOP: 71px;">
	<FrmFieldKeys FrmID='FrmODMSCRPCN01' BOID='ODMSCRPCN01' FieldName='rditem'></FrmFieldKeys>
</cc1:DscTextBox>
<asp:RadioButton ID='rditem_ctrolRadio0' runat='server' GroupName='rditem' Text='' Value='0' style='position:absolute;top:71px;left:81px;z-index:693;'/>
<asp:RadioButton ID='rditem_ctrolRadio1' runat='server' GroupName='rditem' Text='' Value='1' style='position:absolute;top:71px;left:200px;z-index:693;'/>
<asp:RadioButton ID='rditem_ctrolRadio2' runat='server' GroupName='rditem' Text='' Value='2' style='position:absolute;top:71px;left:325px;z-index:693;'/>
<cc1:DscTextBox id='rdtras' runat='server' title='是' ShowTitle='False'
	style="display:none;Z-INDEX:693; POSITION: absolute; LEFT: 181px; TOP: 405px;">
	<FrmFieldKeys FrmID='FrmODMSCRPCN01' BOID='ODMSCRPCN01' FieldName='rdtras'></FrmFieldKeys>
</cc1:DscTextBox>
<asp:RadioButton ID='rdtras_ctrolRadio0' runat='server' GroupName='rdtras' Text='' Value='0' style='position:absolute;top:405px;left:181px;z-index:693;'/>
<asp:RadioButton ID='rdtras_ctrolRadio1' runat='server' GroupName='rdtras' Text='' Value='1' style='position:absolute;top:405px;left:232px;z-index:693;'/>

<div style="position:absolute; left:2px; top:5px; z-index:10; ">
	<img src="ODMSCRPCN02.png" id="Head01_file_1" runat="server" width="744" height="484" />
</div>

						</div>
					</cc1:Dscpanel>


					
					<!--單身Grid畫面-->
					
					<cc1:DscPanel id="hdnDisplayInCS" style="DISPLAY: none; Z-INDEX: 116; LEFT: 264px; TOP: 72px" runat="server" Width="100%">
						<div style="OVERFLOW: auto; WIDTH: 100%; POSITION: relative; HEIGHT: 100%; BACKGROUND-COLOR: transparent; left: 0px; top: 0px;" ></div>
					</cc1:DscPanel>
					<cc1:DscPanel id="hdnDisplayInHTML" style="DISPLAY: none; Z-INDEX: 116; LEFT: 264px; TOP: 72px" runat="server">
						<div style="OVERFLOW: auto; WIDTH: 100%; POSITION: relative; HEIGHT: 100%; BACKGROUND-COLOR: transparent" >
						</div>
					</cc1:DscPanel>
				</cc1:DscPanel>
				<!--2012/12/25:3.5.1.38:hiro:S00-20121031003:3.修正多選開窗onChange事件。↓-->
				<asp:HiddenField ID='hdnOpenQueryPreSetValue' runat='server' Value='' />
				<!--2012/12/25:3.5.1.38:hiro:S00-20121031003:3.修正多選開窗onChange事件。↑-->
				<!--2010/06/01:3.2.1.13:hiro:S00-20100323002:功能新增：新增人員、日期、部門(含多選開窗)元件↓-->
				<cc1:DscPanel id="hdnDisplayInHTML2" style="DISPLAY: none; Z-INDEX: 116; LEFT: 264px; TOP: 72px" runat="server">
					<div style="OVERFLOW: auto; WIDTH: 100%; POSITION: relative; HEIGHT: 100%; BACKGROUND-COLOR: transparent">
						<cc1:DscTextBox ID="edReceiver" runat="server" ShowTitle="False" Title="" Width="36px">
							<InputStyle Width="0px" />
							<Validator MsgF0001="" MsgF0002="" ValidatorExpression="" ValidatorMsg="" ValidatorName="" />
							<TitleStyle Width="60px" />
						</cc1:DscTextBox>
					</div>
				</cc1:DscPanel>
				<!--2010/06/01:3.2.1.13:hiro:S00-20100323002:功能新增：新增人員、日期、部門(含多選開窗)元件↑-->
			</div>
		</div>

<!--引用JavaScript-->
<script src="ODMSCRPCN01.js?NoCache=202207291705" type="text/javascript"></script>
</asp:Content>

var Error_Message ="";
var _ewTop  = 0;
var _ewLeft = 0;
var Error_Count = 1;
var _extraHeight = 0;

function CheckNull(rs_FieldValueToValidate,ms_ErrMsg)
{	
    if(rs_FieldValueToValidate != null)
    {
    rs_FieldValueToValidate=rs_FieldValueToValidate.toString().trim();
    }
	if(rs_FieldValueToValidate == "" || rs_FieldValueToValidate == null)
	{

		Error_Message= Error_Message +  Error_Count + " . " + ms_ErrMsg + "<br>";
		Error_Count = Error_Count + 1;
		
		return false;
	}
	else
	{
		return true;
	}
}
function ShowError()
{
    $.messager.show({
        title:'In2In Global - Errors',
        msg:Error_Message,
        showType:'slide',
        style:{
            right:'', 
            left: _ewLeft,
            top:'' ,
            bottom: _ewTop //-document.body.scrollTop-document.documentElement.scrollTop
        }
    });
}
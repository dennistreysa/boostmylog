// ==UserScript==
// @name Boost My Log
// @author dennistreysa
// @version 0.0.1.17
// @copyright 2016, dennistreysa
// @icon https://raw.githubusercontent.com/dennistreysa/boostmylog/master/res/icon.png
// @description This script boosts your log with nonprintable characters that will count as a word, so you don't have to write any unnecessary bullshit anymore!
// @updateURL https://raw.githubusercontent.com/dennistreysa/boostmylog/master/bml.latest.user.js
// @downloadURL https://raw.githubusercontent.com/dennistreysa/boostmylog/master/bml.latest.user.js
// @include *geocaching.com/seek/log.aspx?ID=*
// @include *geocaching.com/seek/log.aspx?LUID=*
// @noframes
// ==/UserScript==

// Credits:
// 		Icon by Freepik
//		http://www.flaticon.com/free-icon/rocket_65472?#term=rocket&page=1&position=16

console.log("BML: started");

if($){
	$(document).ready(function(){
		// Get log-button
		var $button = $("#ctl00_ContentBody_LogBookPanel1_btnSubmitLog");
		
		// create new button
		var $booster = $('<input/>', {
							value: "Boost My Log! 😈",
							type: "submit",
							id: 'bml_btn',
							class: "Button",
							click: function (e) {
								var $textarea = $("#ctl00_ContentBody_LogBookPanel1_uxLogInfo");
								var text = $textarea.val();
								var textLen = text.length;
								var appendStr = " \u200B\u200C\u200B";
								var appendStrLen = 4;
								var maxTextLen = 4000;
								var remaining = Math.floor((maxTextLen - textLen) / appendStrLen);

								for(var i = 0; i < remaining; i++){
									text += appendStr;
								}
								
								$textarea.val(text);

								// Trigger keyup event
								var keyupEvent = new Event('keyup');
								var textarea = document.getElementById('ctl00_ContentBody_LogBookPanel1_uxLogInfo');
								textarea.dispatchEvent(keyupEvent);

								var $message = $("<div/>", {html:"Log successfully boosted by "+remaining+" words ;)"});

								$message.insertBefore($button);

								// Don't submit
								e.preventDefault();
								return false;
							}
						});

		$booster.insertAfter($button);
	});
}

/*
 * Version-History:
 *
 * v0.0.1 (2016-02-16)
 *		- Initial release
 *
 */
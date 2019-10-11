'use strict';
var items = [];

function printReceipt(tags){
	var items = decodeTags(tags);
	//call calculateReceipt
	//call renderReceipt
}

function decodeTags(tags){
	//call decodeBarCodes
	//decodedBarCodes = decodeBarCodes(tags);
	//call combineItems
}

function decodeBarCodes(tags){
	//accept tags and convert
	var decodedBarCodes = tags.map((barcode,quantity) =>{
	  const barcodesTemp = {};
	  barcodesTemp.barcode = barcode.split('-')[0].toString();
	  if (barcode.includes('-')){
	    barcodesTemp.quantity = parseFloat(barcode.split('-')[1]);
	  }
	  else {
	    barcodesTemp.quantity = 1;
	  }
	  return barcodesTemp;
	});

	//pass decodedBarCodes to combineItems
	return decodedBarCodes;
	// combineItems(decodedBarCodes);
	
}

function combineItems(decodedBarCodes){
	//call loadItems
}

function loadItems(decodedBarCodes){
	loadItems(decodedBarCodes);
	//call loadAllItems from fixture.js
}

function calculateReceipt(){
	//call calculateReceiptItems
	//call calculateReceiptTotal
}

function renderReceipt(){
	//call calculateReceiptSavings
}

function calculateReceiptItems(){
	//call loadAllPromotion
}

function calculateReceiptTotal(){
	//return total
}

function calculateReceiptSavings(){
	//return savings
}

function loadAllPromotion(){
	//call loadPromotions from fixture.js
}

function promotionReceiptItems(){
	//return items with promotions
}
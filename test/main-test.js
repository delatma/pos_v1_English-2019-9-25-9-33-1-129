'use strict';
describe('pos', () => {

  it('should output decodedBarcodes[o] of tags with quantity', () => {
    const tags = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2.5',
      'ITEM000005',
      'ITEM000005-2',
    ];

    const expectedDecodedBarcodes = [
      {
        barcode: 'ITEM000001',
        quantity: 1
      },
      {
        barcode: 'ITEM000001',
        quantity: 1
      },
      {
        barcode: 'ITEM000001',
        quantity: 1
      },
      {
        barcode: 'ITEM000001',
        quantity: 1
      },
      {
        barcode: 'ITEM000001',
        quantity: 1
      },
      {
        barcode: 'ITEM000003',
        quantity: 2.5
      },
      {
        barcode: 'ITEM000005',
        quantity: 1
      },
      {
        barcode: 'ITEM000005',
        quantity: 2
      },
    ];

    expect(decodeBarCodes(tags)).toEqual(expectedDecodedBarcodes);
  });


  it('should output decodedBarcodes[o] of tags with quantity', () => {
    const tags = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2.5',
      'ITEM000005',
      'ITEM000005-2',
    ];

    const expectedDecodedBarcodes = [
      {
        barcode: 'ITEM000001',
        quantity: 1
      },
      {
        barcode: 'ITEM000001',
        quantity: 1
      },
      {
        barcode: 'ITEM000001',
        quantity: 1
      },
      {
        barcode: 'ITEM000001',
        quantity: 1
      },
      {
        barcode: 'ITEM000001',
        quantity: 1
      },
      {
        barcode: 'ITEM000003',
        quantity: 2.5
      },
      {
        barcode: 'ITEM000005',
        quantity: 1
      },
      {
        barcode: 'ITEM000005',
        quantity: 2
      },
    ];

    expect(decodeBarCodes(tags)).toEqual(expectedDecodedBarcodes);
  });
  // it('should print text', () => {

  //   const tags = [
  //     'ITEM000001',
  //     'ITEM000001',
  //     'ITEM000001',
  //     'ITEM000001',
  //     'ITEM000001',
  //     'ITEM000003-2.5',
  //     'ITEM000005',
  //     'ITEM000005-2',
  //   ];

  //   spyOn(console, 'log');

  //   printReceipt(tags);

  //   const expectText = `***<store earning no money>Receipt ***
  //   Name：Sprite，Quantity：5 bottles，Unit：3.00(yuan)，Subtotal：12.00(yuan)
  //   Name：Litchi，Quantity：2.5 pounds，Unit：15.00(yuan)，Subtotal：37.50(yuan)
  //   Name：Instant Noodles，Quantity：3 bags，Unit：4.50(yuan)，Subtotal：9.00(yuan)
  //   ----------------------
  //   Total：58.50(yuan)
  //   Discounted prices：7.50(yuan)
  //   **********************`;

  //   expect(console.log).toHaveBeenCalledWith(expectText);
  // });
});

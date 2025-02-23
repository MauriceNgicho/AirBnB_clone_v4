$(document).ready(function () {
  const selectedAmenities = {};

  $("input[type='checkbox']").change(function () {
    const amenityId = $(this).attr('data-id');
    const amenityName = $(this).attr('data-name');

    if ($(this).is(':checked')) {
      selectedAmenities[amenityId] = amenityName;
    } else {
      delete selectedAmenities[amenityId];
    }

    // Update h4 tag inside
    const amenitiesList = Object.values(selectedAmenities).join(', ');
    $('#selsected-amenities').text(amenitiesList);
  });
});

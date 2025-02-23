$(document).ready(function () {
  const selectedAmenities = {};

  // Check API status
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === "OK") {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });

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

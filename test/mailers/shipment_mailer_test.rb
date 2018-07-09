require 'test_helper'

class ShipmentMailerTest < ActionMailer::TestCase
  test "confirm_shipment" do
    mail = ShipmentMailer.confirm_shipment
    assert_equal "Confirm shipment", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end

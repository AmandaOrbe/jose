# Preview all emails at http://localhost:3000/rails/mailers/shipment_mailer
class ShipmentMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/shipment_mailer/confirm_shipment
  def confirm_shipment
    ShipmentMailer.confirm_shipment
  end

end

class ShipmentMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.shipment_mailer.confirm_shipment.subject
  #
  def confirm_shipment
    @shipment = shipment
    @order = @shipment.order
    @store = @order.store
    subject = build_subject(t('.subject'), resend)

    mail(to: @order.email, from: from_address(@store), subject: subject)
  end




end

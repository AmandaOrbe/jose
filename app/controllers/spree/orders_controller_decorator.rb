

def confirm
  if @order.completed?
    @order.language = i18n.locale.to_s
    @order.save
    OrderMailer.confirm_email(@order).deliver_now
    redirect_to edit_admin_order_url(@order)
  elsif !@order.can_complete?
    render template: 'spree/admin/orders/confirm_advance'
  end
end






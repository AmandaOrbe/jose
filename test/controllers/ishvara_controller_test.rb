require 'test_helper'

class IshvaraControllerTest < ActionDispatch::IntegrationTest
  test "should get historia" do
    get ishvara_historia_url
    assert_response :success
  end

  test "should get prensa" do
    get ishvara_prensa_url
    assert_response :success
  end

  test "should get pasarela" do
    get ishvara_pasarela_url
    assert_response :success
  end

end

let isVerified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = false

if (isVerified && isLoggedIn && hasPaymentToken){
    console.log('Welcome User')

}
else if ( isVerified || isGuest)
{
    console.log('welcome Guest')

}
else
{
    console.log(' Please login')
}
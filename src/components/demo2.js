function dddff () {
  /**
   * @function {string} [default = 123] - A
   */
  function a () {
    console.log('this is a')
    /**
     * @function {string} [default = 123] - B
     */
    function b () {
      console.log('this is b')
      /**
       * @function {string} [default = 123] - D
       */
    }
    b()
    /**
     * @function {string} [default = 123] - C
     */
  }
  /**
   * @function {string} [default = 123] - E
   */
  function c () {
  }
  a()
  c()
}
dddff()
export default () => {
  console.log('this is default')
}
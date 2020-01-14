<template>
  <div class="calculator">
    <Display />
    <Button label="AC" triple />
    <Button label="/" operation />
    <Button label="7" />
    <Button label="8" />
    <Button label="9" />
    <Button label="*" operation />
    <Button label="4" />
    <Button label="5" />
    <Button label="6" />
    <Button label="-" operation />
    <Button label="1" />
    <Button label="2" />
    <Button label="3" />
    <Button label="+" operation />
    <Button label="0" double />
    <Button label="." />
    <Button label="=" operation />
  </div>
</template>

<script>
import Button from "../components/Button"
import Display from "../components/Display"

export default {
  components: { Button, Display }
}
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px 48px;
}
</style>

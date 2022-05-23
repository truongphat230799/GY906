// mlx90614
Blockly.Blocks["mlx90614_read_ambient_temp"] = {
  init: function() {
    this.jsonInit({
      message0: 'đọc nhiệt độ môi trường',
      args0: '',
      output: null,
      colour: "#33aaa",
      
    });
  },
  getDeveloperVars: function() {
    return ['mlx90614'];
  }
};

Blockly.Python["mlx90614_read_ambient_temp"] = function(block) {
  var dropdown_data = block.getFieldValue("DATA");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
  Blockly.Python.definitions_["import_mlx90614"] = "from mlx90614 import MLX90614";
  Blockly.Python.definitions_["import_create_mlx90614"] = "mlx90614 = MLX90614(SoftI2C(scl=Pin(22), sda=Pin(21)))";
  var code = "mlx90614.get_amb_temp()\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Blocks["mlx90614_read_object_temp"] = {
  init: function() {
    this.jsonInit({
      message0: 'đọc nhiệt độ cơ thể',
      args0: '',
      output: null,
      colour: "#33aaa",
      
    });
  },
  getDeveloperVars: function() {
    return ['mlx90614'];
  }
};

Blockly.Python["mlx90614_read_object_temp"] = function(block) {
  var dropdown_data = block.getFieldValue("DATA");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, SoftI2C';
  Blockly.Python.definitions_["import_mlx90614"] = "from mlx90614 import MLX90614";
  Blockly.Python.definitions_["import_create_mlx90614"] = "mlx90614 = MLX90614(SoftI2C(scl=Pin(22), sda=Pin(21)))";
  var code = "mlx90614.get_obj_temp()\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

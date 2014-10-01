function Xtringer() {
}

Xtringer.parse = function(s, data, formatter) {
	var exp = /\{([^\}\:]+)\:?([^\}]+)?[\}]+/g,
		getter = data;
	
	if (!data) {
		getter = function() { return ''; };
	} else if (typeof(data) !== 'function') {
		getter = function(name) { return data[name]; };
	}
	
	return s.replace(exp, function(match, name, format) {
		switch (name)
		{
			case '\\{':
				return '{';
			case '\\':
				return '}';
		}
		
		var value = getter(name) || '';
		
		if (exp.test(value)) {
			value = Xtringer.parse(value, getter, formatter);
		}
		
		if (formatter) {
			return formatter(value, format);
		}
		
		return value;
	});
};

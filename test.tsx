import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [salary, setSalary] = useState<number>(0);

    return (
        <View style={styles.container}>
            {/* 2. Thẻ TextInput ở đây... */}
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                placeholder="Nhập lương của bạn"
                value={salary.toString()}
                onChangeText={(v) => setSalary(Number(v))}

            />
            {/* 3. Thẻ Text hiển thị ở đây... */}
            <View>
                <Text style={styles.sloganText}>{salary}</Text>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: { marginTop: 80, padding: 20, gap: 16 },
    input: { borderWidth: 1, borderColor: 'violet', padding: 10, borderRadius: 8 },
    sloganText: { fontSize: 20, fontWeight: 'bold', color: 'darkblue' }
});
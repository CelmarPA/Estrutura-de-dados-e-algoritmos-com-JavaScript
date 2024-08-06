    buckets_index = (array[i] - min_value) // significant_digit % radix_base
        aux[buckets[buckets_index] - 1] = array[i]
        buckets[buckets_index] -= 1